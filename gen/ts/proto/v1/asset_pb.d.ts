// @generated by protoc-gen-es v1.10.0 with parameter "target=dts"
// @generated from file proto/v1/asset.proto (package proto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Enum representing different types of assets.
 *
 * @generated from enum proto.v1.AssetKind
 */
export declare enum AssetKind {
  /**
   * Default value, unspecified asset type.
   *
   * @generated from enum value: ASSET_KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Token asset type.
   *
   * @generated from enum value: ASSET_KIND_TOKEN = 1;
   */
  TOKEN = 1,

  /**
   * Stake asset type.
   *
   * @generated from enum value: ASSET_KIND_STAKE = 2;
   */
  STAKE = 2,

  /**
   * Loan asset type.
   *
   * @generated from enum value: ASSET_KIND_LOAN = 3;
   */
  LOAN = 3,
}

/**
 * Enum representing the processing status of an intent.
 *
 * @generated from enum proto.v1.ProcessingStatus
 */
export declare enum ProcessingStatus {
  /**
   * Default value, unspecified processing status.
   *
   * @generated from enum value: PROCESSING_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Intent has been received.
   *
   * @generated from enum value: PROCESSING_STATUS_RECEIVED = 1;
   */
  RECEIVED = 1,

  /**
   * Intent has been sent to the solver.
   *
   * @generated from enum value: PROCESSING_STATUS_SENT_TO_SOLVER = 2;
   */
  SENT_TO_SOLVER = 2,

  /**
   * Intent has been solved.
   *
   * @generated from enum value: PROCESSING_STATUS_SOLVED = 3;
   */
  SOLVED = 3,

  /**
   * Intent remains unsolved.
   *
   * @generated from enum value: PROCESSING_STATUS_UNSOLVED = 4;
   */
  UNSOLVED = 4,

  /**
   * Intent has expired.
   *
   * @generated from enum value: PROCESSING_STATUS_EXPIRED = 5;
   */
  EXPIRED = 5,

  /**
   * Intent is on the blockchain.
   *
   * @generated from enum value: PROCESSING_STATUS_ON_CHAIN = 6;
   */
  ON_CHAIN = 6,

  /**
   * Intent is invalid.
   *
   * @generated from enum value: PROCESSING_STATUS_INVALID = 7;
   */
  INVALID = 7,
}

/**
 * BigInt represents a large number
 *
 * @generated from message proto.v1.BigInt
 */
export declare class BigInt extends Message<BigInt> {
  /**
   * @generated from field: bytes value = 1;
   */
  value: Uint8Array;

  constructor(data?: PartialMessage<BigInt>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.BigInt";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BigInt;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BigInt;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BigInt;

  static equals(a: BigInt | PlainMessage<BigInt> | undefined, b: BigInt | PlainMessage<BigInt> | undefined): boolean;
}

/**
 * Message representing the details of an asset.
 *
 * @generated from message proto.v1.AssetType
 */
export declare class AssetType extends Message<AssetType> {
  /**
   * The type of the asset.
   *
   * @generated from field: proto.v1.AssetKind type = 1;
   */
  type: AssetKind;

  /**
   * The address of the asset.
   *
   * @generated from field: string address = 2;
   */
  address: string;

  /**
   * The amount of the asset.
   * In cases of AssetType being used as the to field, it doesn't have to provided
   * and can be left empty
   *
   * @generated from field: proto.v1.BigInt amount = 3;
   */
  amount?: BigInt;

  /**
   * The chain ID where the asset resides.
   *
   * @generated from field: proto.v1.BigInt chain_id = 4;
   */
  chainId?: BigInt;

  constructor(data?: PartialMessage<AssetType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.AssetType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetType;

  static equals(a: AssetType | PlainMessage<AssetType> | undefined, b: AssetType | PlainMessage<AssetType> | undefined): boolean;
}

/**
 * Message representing the details of a stake.
 *
 * @generated from message proto.v1.StakeType
 */
export declare class StakeType extends Message<StakeType> {
  /**
   * The type of the stake.
   *
   * @generated from field: proto.v1.AssetKind type = 1;
   */
  type: AssetKind;

  /**
   * The address of the stake.
   *
   * @generated from field: string address = 2;
   */
  address: string;

  /**
   * The amount of the stake.
   *
   * @generated from field: proto.v1.BigInt amount = 3;
   */
  amount?: BigInt;

  /**
   * The chain ID where the asset resides.
   *
   * @generated from field: proto.v1.BigInt chain_id = 4;
   */
  chainId?: BigInt;

  constructor(data?: PartialMessage<StakeType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.StakeType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StakeType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StakeType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StakeType;

  static equals(a: StakeType | PlainMessage<StakeType> | undefined, b: StakeType | PlainMessage<StakeType> | undefined): boolean;
}

/**
 * Message representing the details of a loan.
 *
 * @generated from message proto.v1.LoanType
 */
export declare class LoanType extends Message<LoanType> {
  /**
   * The type of the loan.
   *
   * @generated from field: proto.v1.AssetKind type = 1;
   */
  type: AssetKind;

  /**
   * The asset associated with the loan.
   *
   * @generated from field: string asset = 2;
   */
  asset: string;

  /**
   * The amount of the loan.
   *
   * @generated from field: proto.v1.BigInt amount = 3;
   */
  amount?: BigInt;

  /**
   * The address associated with the loan.
   *
   * @generated from field: string address = 4;
   */
  address: string;

  /**
   * The chain ID where the asset resides.
   *
   * @generated from field: string chain_id = 5;
   */
  chainId: string;

  constructor(data?: PartialMessage<LoanType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.LoanType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoanType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoanType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoanType;

  static equals(a: LoanType | PlainMessage<LoanType> | undefined, b: LoanType | PlainMessage<LoanType> | undefined): boolean;
}

/**
 * Message representing additional data for an intent.
 *
 * @generated from message proto.v1.ExtraData
 */
export declare class ExtraData extends Message<ExtraData> {
  /**
   * Indicates if the intent is partially fillable.
   *
   * @generated from field: google.protobuf.BoolValue partially_fillable = 1;
   */
  partiallyFillable?: boolean;

  constructor(data?: PartialMessage<ExtraData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.ExtraData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtraData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtraData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtraData;

  static equals(a: ExtraData | PlainMessage<ExtraData> | undefined, b: ExtraData | PlainMessage<ExtraData> | undefined): boolean;
}

/**
 * Message representing an intent with various types of transactions.
 *
 * @generated from message proto.v1.Intent
 */
export declare class Intent extends Message<Intent> {
  /**
   * The sender of the intent.
   *
   * @generated from field: string sender = 1;
   */
  sender: string;

  /**
   * Oneof field representing the asset being sent.
   *
   * @generated from oneof proto.v1.Intent.from
   */
  from: {
    /**
     * The asset being sent.
     *
     * @generated from field: proto.v1.AssetType fromAsset = 2;
     */
    value: AssetType;
    case: "fromAsset";
  } | {
    /**
     * The stake being sent.
     *
     * @generated from field: proto.v1.StakeType fromStake = 3;
     */
    value: StakeType;
    case: "fromStake";
  } | {
    /**
     * The loan being sent.
     *
     * @generated from field: proto.v1.LoanType fromLoan = 4;
     */
    value: LoanType;
    case: "fromLoan";
  } | { case: undefined; value?: undefined };

  /**
   * Oneof field representing the asset being received.
   *
   * @generated from oneof proto.v1.Intent.to
   */
  to: {
    /**
     * The asset being received.
     *
     * @generated from field: proto.v1.AssetType toAsset = 5;
     */
    value: AssetType;
    case: "toAsset";
  } | {
    /**
     * The stake being received.
     *
     * @generated from field: proto.v1.StakeType toStake = 6;
     */
    value: StakeType;
    case: "toStake";
  } | {
    /**
     * The loan being received.
     *
     * @generated from field: proto.v1.LoanType toLoan = 7;
     */
    value: LoanType;
    case: "toLoan";
  } | { case: undefined; value?: undefined };

  /**
   * Additional data for the intent.
   *
   * @generated from field: proto.v1.ExtraData extra_data = 8;
   */
  extraData?: ExtraData;

  /**
   * The processing status of the intent.
   *
   * @generated from field: proto.v1.ProcessingStatus status = 9;
   */
  status: ProcessingStatus;

  /**
   * The creation timestamp of the intent.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 10;
   */
  createdAt?: Timestamp;

  /**
   * when this intent expires
   *
   * @generated from field: google.protobuf.Timestamp expiration_at = 11;
   */
  expirationAt?: Timestamp;

  constructor(data?: PartialMessage<Intent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.Intent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Intent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Intent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Intent;

  static equals(a: Intent | PlainMessage<Intent> | undefined, b: Intent | PlainMessage<Intent> | undefined): boolean;
}

/**
 * Message representing a body of intents.
 *
 * @generated from message proto.v1.Body
 */
export declare class Body extends Message<Body> {
  /**
   * A list of intents.
   *
   * @generated from field: repeated proto.v1.Intent intents = 1;
   */
  intents: Intent[];

  constructor(data?: PartialMessage<Body>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.Body";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Body;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Body;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Body;

  static equals(a: Body | PlainMessage<Body> | undefined, b: Body | PlainMessage<Body> | undefined): boolean;
}

