import { Contract } from "../contract";
import { DisputeReason } from "../dispute";
import { APIError, APISuccess } from "../global";

export type Message = {
  roomId: string;
  from: string;
  date: Date;
  message: string;
  decrypted?: boolean;
  readBy: string[];
  signature: string;
  failedToSend?: boolean;
};

export type PostChatProps = {
  contractId: string;
  message: string;
  signature: string;
};

export type AcknowledgeDisputeRequestParams = { contractId: string };
export type AcknowledgeDisputeRequestQuery = {};
export type AcknowledgeDisputeRequestBody = { email: string };
export type AcknowledgeDisputeResponseBody = APISuccess;
export type AcknowledgeDisputeErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED" | "DUPLICATE" | "INTERNAL_SERVER_ERROR"
>;

export type AcknowledgeDisputeOutcomeRequestParams = { contractId: string };
export type AcknowledgeDisputeOutcomeRequestQuery = {};
export type AcknowledgeDisputeOutcomeRequestBody = {};
export type AcknowledgeDisputeOutcomeResponseBody = APISuccess;
export type AcknowledgeDisputeOutcomeErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED" | "DUPLICATE"
>;

export type CancelContractRequestParams = {
  contractId: string;
  satsPerByte?: number;
};
export type CancelContractRequestQuery = {};
export type CancelContractRequestBody = {};
export type CancelContractResponseBody = APISuccess & { psbt?: string };
export type CancelContractErrorResponseBody = APIError<
  "TRANSACTION_INVALID" | "NOT_FOUND" | "UNAUTHORIZED" | "INTERNAL_SERVER_ERROR"
>;

export type ConfirmCancelationRequestRequestParams = { contractId: string };
export type ConfirmCancelationRequestRequestQuery = {};
export type ConfirmCancelationRequestRequestBody = {};
export type ConfirmCancelationRequestResponseBody = APISuccess;
export type ConfirmCancelationRequestErrorResponseBody = APIError<
  "NOT_FOUND" | "UNAUTHORIZED" | "TRANSACTION_INVALID" | "INTERNAL_SERVER_ERROR"
>;

export type ConfirmPaymentRequestParams = { contractId: string };
export type ConfirmPaymentRequestQuery = {};
export type ConfirmPaymentBuyerRequestBody = {};
export type ConfirmPaymentBuyerResponseBody = APISuccess;
export type ConfirmPaymentSellerRequestBody = {
  releaseTransaction: string;
  batchReleasePsbt?: string;
};
export type ConfirmPaymentSellerResponseBody = APISuccess & {
  txId?: string;
  batchId?: string;
};
export type ConfirmPaymentErrorResponseBody = APIError<
  | "NOT_FOUND"
  | "UNAUTHORIZED"
  | "CANCELED"
  | "FORM_INVALID"
  | "INTERNAL_SERVER_ERROR"
>;

export type GetChatRequestParams = { contractId: string };
export type GetChatRequestQuery = { page?: number };
export type GetChatRequestBody = {};
export type GetChatResponseBody = Message[];
export type GetChatErrorResponseBody = APIError<"NOT_FOUND">;

export type GetContractsRequestParams = {};
export type GetContractsRequestQuery = {};
export type GetContractsRequestBody = {};
export type GetContractsResponseBody = Contract[];
export type GetContractsErrorResponseBody = APIError<null>;

export type PostChatRequestParams = { contractId: string };
export type PostChatRequestQuery = {};
export type PostChatRequestBody = { message: string; signature: string };
export type PostChatResponseBody = APISuccess;
export type PostChatErrorResponseBody = APIError<"NOT_FOUND">;

export type RaiseDisputeRequestParams = { contractId: string };
export type RaiseDisputeRequestQuery = {};
export type RaiseDisputeRequestBody = {
  email?: string;
  reason: DisputeReason;
  message?: string;
  symmetricKeyEncrypted: string;
  paymentDataSellerEncrypted?: string;
};
export type RaiseDisputeResponseBody = APISuccess;
export type RaiseDisputeErrorResponseBody = APIError<
  "NOT_FOUND" | "DUPLICATE" | "INTERNAL_SERVER_ERROR"
>;

export type RateUserRequestParams = { contractId: string };
export type RateUserRequestQuery = {};
export type RateUserRequestBody = { rating: 1 | -1; signature: string };
export type RateUserResponseBody = APISuccess;
export type RateUserErrorResponseBody = APIError<
  "NOT_FOUND" | "CANCELED" | "UNAUTHORIZED"
>;
