import { APIError, APISuccess } from "../global";

export type SendReportRequestParams = {};
export type SendReportRequestQuery = {};
export type SendReportRequestBody = {
  email: string;
  topic: string;
  reason: string;
  message: string;
};
export type SendReportResponseBody = APISuccess;
export type SendReportErrorResponseBody = APIError<null>;
