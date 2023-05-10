// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kargo/v1alpha1/types.proto (package akuity.io.kargo.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * TODO
 *
 * @generated from message akuity.io.kargo.v1alpha1.Environment
 */
export class Environment extends Message<Environment> {
  constructor(data?: PartialMessage<Environment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "akuity.io.kargo.v1alpha1.Environment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Environment {
    return new Environment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Environment {
    return new Environment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Environment {
    return new Environment().fromJsonString(jsonString, options);
  }

  static equals(a: Environment | PlainMessage<Environment> | undefined, b: Environment | PlainMessage<Environment> | undefined): boolean {
    return proto3.util.equals(Environment, a, b);
  }
}
