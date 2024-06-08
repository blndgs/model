// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file proto/v1/asset.proto (package proto.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { BoolValue, Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Enum representing different types of assets.
 *
 * @generated from enum proto.v1.AssetKind
 */
export enum AssetKind {
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
// Retrieve enum metadata with: proto3.getEnumType(AssetKind)
proto3.util.setEnumType(AssetKind, "proto.v1.AssetKind", [
  { no: 0, name: "ASSET_KIND_UNSPECIFIED" },
  { no: 1, name: "ASSET_KIND_TOKEN" },
  { no: 2, name: "ASSET_KIND_STAKE" },
  { no: 3, name: "ASSET_KIND_LOAN" },
]);

/**
 * Enum representing the processing status of an intent.
 *
 * @generated from enum proto.v1.ProcessingStatus
 */
export enum ProcessingStatus {
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
// Retrieve enum metadata with: proto3.getEnumType(ProcessingStatus)
proto3.util.setEnumType(ProcessingStatus, "proto.v1.ProcessingStatus", [
  { no: 0, name: "PROCESSING_STATUS_UNSPECIFIED" },
  { no: 1, name: "PROCESSING_STATUS_RECEIVED" },
  { no: 2, name: "PROCESSING_STATUS_SENT_TO_SOLVER" },
  { no: 3, name: "PROCESSING_STATUS_SOLVED" },
  { no: 4, name: "PROCESSING_STATUS_UNSOLVED" },
  { no: 5, name: "PROCESSING_STATUS_EXPIRED" },
  { no: 6, name: "PROCESSING_STATUS_ON_CHAIN" },
  { no: 7, name: "PROCESSING_STATUS_INVALID" },
]);

/**
 * BigInt represents a large number
 *
 * @generated from message proto.v1.BigInt
 */
export class BigInt extends Message<BigInt> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<BigInt>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.BigInt";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BigInt {
    return new BigInt().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BigInt {
    return new BigInt().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BigInt {
    return new BigInt().fromJsonString(jsonString, options);
  }

  static equals(a: BigInt | PlainMessage<BigInt> | undefined, b: BigInt | PlainMessage<BigInt> | undefined): boolean {
    return proto3.util.equals(BigInt, a, b);
  }
}

/**
 * Message representing the details of an asset.
 *
 * @generated from message proto.v1.AssetType
 */
export class AssetType extends Message<AssetType> {
  /**
   * The type of the asset.
   *
   * @generated from field: proto.v1.AssetKind type = 1;
   */
  type = AssetKind.UNSPECIFIED;

  /**
   * The address of the asset.
   *
   * @generated from field: string address = 2;
   */
  address = "";

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

  constructor(data?: PartialMessage<AssetType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.AssetType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(AssetKind) },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: BigInt },
    { no: 4, name: "chain_id", kind: "message", T: BigInt },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetType {
    return new AssetType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetType {
    return new AssetType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetType {
    return new AssetType().fromJsonString(jsonString, options);
  }

  static equals(a: AssetType | PlainMessage<AssetType> | undefined, b: AssetType | PlainMessage<AssetType> | undefined): boolean {
    return proto3.util.equals(AssetType, a, b);
  }
}

/**
 * Message representing the details of a stake.
 *
 * @generated from message proto.v1.StakeType
 */
export class StakeType extends Message<StakeType> {
  /**
   * The type of the stake.
   *
   * @generated from field: proto.v1.AssetKind type = 1;
   */
  type = AssetKind.UNSPECIFIED;

  /**
   * The address of the stake.
   *
   * @generated from field: string address = 2;
   */
  address = "";

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

  constructor(data?: PartialMessage<StakeType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.StakeType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(AssetKind) },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: BigInt },
    { no: 4, name: "chain_id", kind: "message", T: BigInt },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StakeType {
    return new StakeType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StakeType {
    return new StakeType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StakeType {
    return new StakeType().fromJsonString(jsonString, options);
  }

  static equals(a: StakeType | PlainMessage<StakeType> | undefined, b: StakeType | PlainMessage<StakeType> | undefined): boolean {
    return proto3.util.equals(StakeType, a, b);
  }
}

/**
 * Message representing the details of a loan.
 *
 * @generated from message proto.v1.LoanType
 */
export class LoanType extends Message<LoanType> {
  /**
   * The type of the loan.
   *
   * @generated from field: proto.v1.AssetKind type = 1;
   */
  type = AssetKind.UNSPECIFIED;

  /**
   * The asset associated with the loan.
   *
   * @generated from field: string asset = 2;
   */
  asset = "";

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
  address = "";

  /**
   * The chain ID where the asset resides.
   *
   * @generated from field: string chain_id = 5;
   */
  chainId = "";

  constructor(data?: PartialMessage<LoanType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.LoanType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(AssetKind) },
    { no: 2, name: "asset", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: BigInt },
    { no: 4, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoanType {
    return new LoanType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoanType {
    return new LoanType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoanType {
    return new LoanType().fromJsonString(jsonString, options);
  }

  static equals(a: LoanType | PlainMessage<LoanType> | undefined, b: LoanType | PlainMessage<LoanType> | undefined): boolean {
    return proto3.util.equals(LoanType, a, b);
  }
}

/**
 * Message representing additional data for an intent.
 *
 * @generated from message proto.v1.ExtraData
 */
export class ExtraData extends Message<ExtraData> {
  /**
   * Indicates if the intent is partially fillable.
   *
   * @generated from field: google.protobuf.BoolValue partially_fillable = 1;
   */
  partiallyFillable?: boolean;

  constructor(data?: PartialMessage<ExtraData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.ExtraData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "partially_fillable", kind: "message", T: BoolValue },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExtraData {
    return new ExtraData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExtraData {
    return new ExtraData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExtraData {
    return new ExtraData().fromJsonString(jsonString, options);
  }

  static equals(a: ExtraData | PlainMessage<ExtraData> | undefined, b: ExtraData | PlainMessage<ExtraData> | undefined): boolean {
    return proto3.util.equals(ExtraData, a, b);
  }
}

/**
 * Message representing an intent with various types of transactions.
 *
 * @generated from message proto.v1.Intent
 */
export class Intent extends Message<Intent> {
  /**
   * The sender of the intent.
   *
   * @generated from field: string sender = 1;
   */
  sender = "";

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
  } | { case: undefined; value?: undefined } = { case: undefined };

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
  } | { case: undefined; value?: undefined } = { case: undefined };

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
  status = ProcessingStatus.UNSPECIFIED;

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

  constructor(data?: PartialMessage<Intent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.Intent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fromAsset", kind: "message", T: AssetType, oneof: "from" },
    { no: 3, name: "fromStake", kind: "message", T: StakeType, oneof: "from" },
    { no: 4, name: "fromLoan", kind: "message", T: LoanType, oneof: "from" },
    { no: 5, name: "toAsset", kind: "message", T: AssetType, oneof: "to" },
    { no: 6, name: "toStake", kind: "message", T: StakeType, oneof: "to" },
    { no: 7, name: "toLoan", kind: "message", T: LoanType, oneof: "to" },
    { no: 8, name: "extra_data", kind: "message", T: ExtraData },
    { no: 9, name: "status", kind: "enum", T: proto3.getEnumType(ProcessingStatus) },
    { no: 10, name: "created_at", kind: "message", T: Timestamp },
    { no: 11, name: "expiration_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Intent {
    return new Intent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Intent {
    return new Intent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Intent {
    return new Intent().fromJsonString(jsonString, options);
  }

  static equals(a: Intent | PlainMessage<Intent> | undefined, b: Intent | PlainMessage<Intent> | undefined): boolean {
    return proto3.util.equals(Intent, a, b);
  }
}

/**
 * Message representing a body of intents.
 *
 * @generated from message proto.v1.Body
 */
export class Body extends Message<Body> {
  /**
   * A list of intents.
   *
   * @generated from field: repeated proto.v1.Intent intents = 1;
   */
  intents: Intent[] = [];

  constructor(data?: PartialMessage<Body>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "proto.v1.Body";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "intents", kind: "message", T: Intent, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Body {
    return new Body().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Body {
    return new Body().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Body {
    return new Body().fromJsonString(jsonString, options);
  }

  static equals(a: Body | PlainMessage<Body> | undefined, b: Body | PlainMessage<Body> | undefined): boolean {
    return proto3.util.equals(Body, a, b);
  }
}

