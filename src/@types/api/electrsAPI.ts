import { FeeRecommendation, Transaction } from "../electrs";
import { APIError } from "../global";

export type GetTxRequestParams = { txId: string };
export type GetTxRequestQuery = {};
export type GetTxRequestBody = {};
export type GetTxResponseBody = Transaction;
export type GetTxErrorResponseBody = APIError<"INTERNAL_SERVER_ERROR">;

export type PostTxRequestParams = {};
export type PostTxRequestQuery = {};
export type PostTxRequestBody = { tx: string };
export type PostTxResponseBody = { txId: string };
export type PostTxErrorResponseBody = APIError<"INTERNAL_SERVER_ERROR">;

export type EstimateFeesRequestParams = {};
export type EstimateFeesRequestQuery = {};
export type EstimateFeesRequestBody = {};
export type EstimateFeesResponseBody = FeeRecommendation;
export type EstimateFeesErrorResponseBody = APIError<"UNKNOWN">;
