package model

import (
	"bytes"
	"io"
	"math/big"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	pb "github.com/blndgs/model/gen/go/proto/v1"
	"github.com/bufbuild/protovalidate-go"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/types/known/timestamppb"
	"google.golang.org/protobuf/types/known/wrapperspb"
)

func submitHandler(c *gin.Context) {
	var body pb.Body

	var b = bytes.NewBuffer(nil)
	_, err := io.Copy(b, c.Request.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not copy json"})
		return
	}

	protojsonUnmarshaler := protojson.UnmarshalOptions{DiscardUnknown: true}
	if err := protojsonUnmarshaler.Unmarshal(b.Bytes(), &body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid protojson request"})
		return
	}

	// Validate the body using the generated Validate method
	v, err := protovalidate.New()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := v.Validate(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Process the valid request
	c.JSON(http.StatusOK, gin.H{"message": "Received successfully"})
}

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.POST("/submit", submitHandler)
	return r
}

func TestSubmitHandler(t *testing.T) {
	// Setup
	gin.SetMode(gin.TestMode)
	router := setupRouter()
	const senderAddress = "0x0A7199a96fdf0252E09F76545c1eF2be3692F46b"
	const validTokenAddressFrom = "0x0000000000000000000000000000000000000001"
	const validTokenAddressTo = "0x0000000000000000000000000000000000000002"

	fromInt, err := FromBigInt(big.NewInt(100))
	require.NoError(t, err)

	toInt, err := FromBigInt(big.NewInt(50))
	require.NoError(t, err)

	chainID, err := FromBigInt(big.NewInt(1))
	require.NoError(t, err)

	testCases := []struct {
		description string
		payload     *pb.Body
		expectCode  int
	}{
		{
			description: "Valid Request with TOKEN assets",
			payload: &pb.Body{
				Intents: []*pb.Intent{
					{
						Sender: senderAddress,
						From: &pb.Intent_FromAsset{
							FromAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressFrom,
								Amount:  fromInt,
								ChainId: chainID,
							},
						},
						To: &pb.Intent_ToAsset{
							ToAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressTo,
								Amount:  toInt,
								ChainId: chainID,
							},
						},
						ExtraData: &pb.ExtraData{
							PartiallyFillable: &wrapperspb.BoolValue{Value: false},
						},
						Status:    pb.ProcessingStatus_PROCESSING_STATUS_RECEIVED,
						CreatedAt: timestamppb.Now(),
						// add 10 minutes
						ExpirationAt: timestamppb.New(time.Now().AddDate(0, 0, 10)),
					},
				},
			},
			expectCode: http.StatusOK,
		},
		{
			description: "Invalid Request - Invalid Ethereum address format",
			payload: &pb.Body{
				Intents: []*pb.Intent{
					{
						Sender: senderAddress,
						From: &pb.Intent_FromAsset{
							FromAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: "InvalidTokenAddressFrom",
								Amount:  fromInt,
								ChainId: chainID,
							},
						},
						To: &pb.Intent_ToAsset{
							ToAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressTo,
								Amount:  toInt,
								ChainId: chainID,
							},
						},
						ExtraData: &pb.ExtraData{
							PartiallyFillable: &wrapperspb.BoolValue{Value: false},
						},
						Status:    pb.ProcessingStatus_PROCESSING_STATUS_RECEIVED,
						CreatedAt: timestamppb.Now(),
						// add 10 minutes
						ExpirationAt: timestamppb.New(time.Now().AddDate(0, 0, 10)),
					},
				},
			},
			expectCode: http.StatusBadRequest,
		},
		{
			description: "Invalid Request - Unsupported Asset Type",
			payload: &pb.Body{
				Intents: []*pb.Intent{
					{
						Sender: senderAddress,
						From: &pb.Intent_FromAsset{
							FromAsset: &pb.AssetType{
								Type:    pb.AssetKind(999), // Unsupported asset type
								Address: validTokenAddressFrom,
								Amount:  fromInt,
								ChainId: chainID,
							},
						},
						To: &pb.Intent_ToAsset{
							ToAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressTo,
								Amount:  toInt,
								ChainId: chainID,
							},
						},
						ExtraData: &pb.ExtraData{
							PartiallyFillable: &wrapperspb.BoolValue{Value: false},
						},
						Status:    pb.ProcessingStatus_PROCESSING_STATUS_RECEIVED,
						CreatedAt: timestamppb.Now(),
						// add 10 minutes
						ExpirationAt: timestamppb.New(time.Now().AddDate(0, 0, 10)),
					},
				},
			},
			expectCode: http.StatusBadRequest,
		},
		{
			description: "Valid Operation - Swap (buy or sell) for AMM without expiration date",
			payload: &pb.Body{
				Intents: []*pb.Intent{
					{
						Sender: senderAddress,
						From: &pb.Intent_FromAsset{
							FromAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressFrom,
								Amount:  fromInt,
								ChainId: chainID,
							},
						},
						To: &pb.Intent_ToAsset{
							ToAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressTo,
								ChainId: chainID,
							},
						},
						ExtraData: &pb.ExtraData{
							PartiallyFillable: &wrapperspb.BoolValue{Value: false},
						},
						Status:    pb.ProcessingStatus_PROCESSING_STATUS_RECEIVED,
						CreatedAt: timestamppb.Now(),
					},
				},
			},
			expectCode: http.StatusOK,
		},
		{
			description: "Valid Operation - Orderbook with expiration date",
			payload: &pb.Body{
				Intents: []*pb.Intent{
					{
						Sender: senderAddress,
						From: &pb.Intent_FromAsset{
							FromAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressFrom,
								Amount:  fromInt,
								ChainId: chainID,
							},
						},
						To: &pb.Intent_ToAsset{
							ToAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressTo,
								Amount:  toInt,
								ChainId: chainID,
							},
						},
						ExtraData: &pb.ExtraData{
							PartiallyFillable: &wrapperspb.BoolValue{Value: false},
						},
						Status:    pb.ProcessingStatus_PROCESSING_STATUS_RECEIVED,
						CreatedAt: timestamppb.Now(),
						// add 10 minutes
						ExpirationAt: timestamppb.New(time.Now().Add(-10 * time.Minute)),
					},
				},
			},
			expectCode: http.StatusOK,
		},
		{
			description: "Valid Operation - Staking",
			payload: &pb.Body{
				Intents: []*pb.Intent{
					{
						Sender: senderAddress,
						From: &pb.Intent_FromAsset{
							FromAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressFrom,
								Amount:  fromInt,
								ChainId: chainID,
							},
						},
						To: &pb.Intent_ToStake{
							ToStake: &pb.StakeType{
								Type:    pb.AssetKind_ASSET_KIND_STAKE,
								Address: validTokenAddressTo,
								Amount:  toInt,
								ChainId: chainID,
							},
						},
						Status:    pb.ProcessingStatus_PROCESSING_STATUS_RECEIVED,
						CreatedAt: timestamppb.Now(),
						// add 10 minutes
						ExpirationAt: timestamppb.New(time.Now().AddDate(0, 0, 10)),
					},
				},
			},
			expectCode: http.StatusOK,
		},
		{
			description: "Valid Operation - Unstaking",
			payload: &pb.Body{
				Intents: []*pb.Intent{
					{
						Sender: senderAddress,
						From: &pb.Intent_FromStake{
							FromStake: &pb.StakeType{
								Type:    pb.AssetKind_ASSET_KIND_STAKE,
								Address: validTokenAddressTo,
								Amount:  fromInt,
								ChainId: chainID,
							},
						},
						To: &pb.Intent_ToAsset{
							ToAsset: &pb.AssetType{
								Type:    pb.AssetKind_ASSET_KIND_TOKEN,
								Address: validTokenAddressFrom,
								ChainId: chainID,
							},
						},
						Status:    pb.ProcessingStatus_PROCESSING_STATUS_RECEIVED,
						CreatedAt: timestamppb.Now(),
						// add 10 minutes
						ExpirationAt: timestamppb.New(time.Now().AddDate(0, 0, 10)),
					},
				},
			},
			expectCode: http.StatusOK,
		},
	}

	// Run test cases
	for _, tc := range testCases {
		t.Run(tc.description, func(t *testing.T) {
			payloadBytes, err := protojson.Marshal(tc.payload)
			if err != nil {
				t.Fatalf("Failed to marshal payload: %v", err)
			}
			req, _ := http.NewRequest("POST", "/submit", bytes.NewBuffer(payloadBytes))
			req.Header.Set("Content-Type", "application/json")

			w := httptest.NewRecorder()
			router.ServeHTTP(w, req)

			if w.Code != tc.expectCode {
				t.Errorf("Expected status code %d, got %d for scenario '%s'", tc.expectCode, w.Code, tc.description)
			}
		})
	}
}
