package model

import (
	"math/big"
	"testing"

	protov1 "github.com/blndgs/model/gen/go/proto/v1"
	"github.com/stretchr/testify/require"
)

// Helper function to create big.Int values for testing
func newBigInt(s string) *big.Int {
	i, _ := new(big.Int).SetString(s, 10)
	return i
}

func TestToBigInt(t *testing.T) {
	testCases := []struct {
		name        string
		input       *protov1.BigInt
		expected    *big.Int
		expectError bool
	}{
		{"Nil input", nil, nil, true},
		{"Empty input", &protov1.BigInt{Value: []byte{}}, nil, true},
		{"Zero input", &protov1.BigInt{Value: []byte{0}}, nil, true},
		{"Small number", &protov1.BigInt{Value: newBigInt("1").Bytes()}, newBigInt("1"), false},
		{"Large number", &protov1.BigInt{Value: newBigInt("65536").Bytes()}, newBigInt("65536"), false},
		{"10 ETH in wei", &protov1.BigInt{Value: newBigInt("10000000000000000000").Bytes()}, newBigInt("10000000000000000000"), false},
		{"1 USDC", &protov1.BigInt{Value: newBigInt("1000000").Bytes()}, newBigInt("1000000"), false},
		{"0.5 BTC", &protov1.BigInt{Value: newBigInt("50000000").Bytes()}, newBigInt("50000000"), false},
		// {"Negative small number", &protov1.BigInt{Value: newBigInt("-1").Bytes()}, newBigInt("1"), false},
		// {"Negative large number", &protov1.BigInt{Value: newBigInt("-1000000000000000000").Bytes()}, newBigInt("1000000000000000000"), false},
		// should be:
		{"Negative small number", &protov1.BigInt{Value: newBigInt("-1").Bytes(), Negative: true}, nil, true},
		{"Negative large number", &protov1.BigInt{Value: newBigInt("-1000000000000000000").Bytes(), Negative: true}, nil, true},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			result, err := ToBigInt(tc.input)
			if tc.expectError {
				require.Error(t, err)
			} else {
				require.NoError(t, err)
				require.Equal(t, 0, tc.expected.Cmp(result), "Expected %s, got %s", tc.expected.String(), result.String())
			}
		})
	}
}

func TestFromBigInt(t *testing.T) {
	testCases := []struct {
		name        string
		input       *big.Int
		expectError bool
		errorMsg    string
	}{
		{"Nil input", nil, true, "big.Int value cannot be nil"},
		{"Zero", newBigInt("0"), true, ""},
		{"Small number", newBigInt("100"), false, ""},
		{"Large number", newBigInt("1000000000000000000"), false, ""},
		{"10 ETH in wei", newBigInt("10000000000000000000"), false, ""},
		{"1 USDC", newBigInt("1000000"), false, ""},
		{"0.5 BTC", newBigInt("50000000"), false, ""},
		// {"Negative small number", newBigInt("-100"), false, ""},
		// {"Negative large number", newBigInt("-1000000000000000000"), false, ""},
		// should be
		{"Negative small number", newBigInt("-100"), true, "amount cannot be a zero or negative amount"},
		{"Negative large number", newBigInt("-1000000000000000000"), true, "amount cannot be a zero or negative amount"},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			result, err := FromBigInt(tc.input)
			if tc.expectError {
				require.Error(t, err)
				require.Contains(t, err.Error(), tc.errorMsg)
			} else {
				require.NoError(t, err)
				require.NotNil(t, result)
				require.Equal(t, tc.input.Bytes(), result.Value)
			}
		})
	}
}
