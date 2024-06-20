import { APIError } from "../global";
export type GetBatchStatusRequestParams = {};
export type GetBatchStatusRequestQuery = { feeRate?: string; id?: string };
export type GetBatchStatusRequestBody = {};
export type GetBatchStatusResponseBody = {
  participants: number;
  maxParticipants: number;
  timeRemaining: number;
  completed: boolean;
  txId?: string;
};
export type GetBatchStatusErrorResponseBody = APIError<null>;
