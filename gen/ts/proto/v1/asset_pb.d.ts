// @generated by protoc-gen-es v1.10.0 with parameter "target=dts"
// @generated from file proto/v1/asset.proto (package proto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

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
 * @generated from message proto.v1.Asset
 */
export declare class Asset extends Message<Asset> {
  /**
   * The address of the asset.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * The amount of the asset.
   * In cases of AssetType being used as the to field, it doesn't have to provided
   * and can be left empty
   *
   * @generated from field: proto.v1.BigInt amount = 2;
   */
  amount?: BigInt;

  /**
   * The chain ID where the asset resides.
   *
   * @generated from field: proto.v1.BigInt chain_id = 3;
   */
  chainId?: BigInt;

  constructor(data?: PartialMessage<Asset>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.Asset";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Asset;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Asset;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Asset;

  static equals(a: Asset | PlainMessage<Asset> | undefined, b: Asset | PlainMessage<Asset> | undefined): boolean;
}

/**
 * Message representing the details of a stake.
 *
 * @generated from message proto.v1.Stake
 */
export declare class Stake extends Message<Stake> {
  /**
   * The address of the stake.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * The amount of the stake.
   *
   * @generated from field: proto.v1.BigInt amount = 2;
   */
  amount?: BigInt;

  /**
   * The chain ID where the asset resides.
   *
   * @generated from field: proto.v1.BigInt chain_id = 3;
   */
  chainId?: BigInt;

  constructor(data?: PartialMessage<Stake>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.Stake";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Stake;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Stake;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Stake;

  static equals(a: Stake | PlainMessage<Stake> | undefined, b: Stake | PlainMessage<Stake> | undefined): boolean;
}

/**
 * Message representing the details of a loan.
 *
 * @generated from message proto.v1.Loan
 */
export declare class Loan extends Message<Loan> {
  /**
   * The asset associated with the loan.
   *
   * @generated from field: string asset = 1;
   */
  asset: string;

  /**
   * The amount of the loan.
   *
   * @generated from field: proto.v1.BigInt amount = 2;
   */
  amount?: BigInt;

  /**
   * The address associated with the loan.
   *
   * @generated from field: string address = 3;
   */
  address: string;

  /**
   * The chain ID where the asset resides.
   *
   * @generated from field: string chain_id = 4;
   */
  chainId: string;

  constructor(data?: PartialMessage<Loan>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto.v1.Loan";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Loan;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Loan;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Loan;

  static equals(a: Loan | PlainMessage<Loan> | undefined, b: Loan | PlainMessage<Loan> | undefined): boolean;
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
     * @generated from field: proto.v1.Asset fromAsset = 2;
     */
    value: Asset;
    case: "fromAsset";
  } | {
    /**
     * The stake being sent.
     *
     * @generated from field: proto.v1.Stake fromStake = 3;
     */
    value: Stake;
    case: "fromStake";
  } | {
    /**
     * The loan being sent.
     *
     * @generated from field: proto.v1.Loan fromLoan = 4;
     */
    value: Loan;
    case: "fromLoan";
  } | { case: undefined; value?: undefined };

  /**
   * Oneof field representing the asset being received.
   *
   * @generated from oneof proto.v1.Intent.to
   */
  to: {
    /**
     * The token being received.
     *
     * @generated from field: proto.v1.Asset toAsset = 5;
     */
    value: Asset;
    case: "toAsset";
  } | {
    /**
     * The stake being received.
     *
     * @generated from field: proto.v1.Stake toStake = 6;
     */
    value: Stake;
    case: "toStake";
  } | {
    /**
     * The loan being received.
     *
     * @generated from field: proto.v1.Loan toLoan = 7;
     */
    value: Loan;
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

