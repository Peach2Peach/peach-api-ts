import {
  EnableBatchingErrorResponseBody,
  EnableBatchingRequestBody,
  EnableBatchingRequestParams,
  EnableBatchingRequestQuery,
  EnableBatchingResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  EnableBatchingRequestParams &
  EnableBatchingRequestQuery &
  EnableBatchingRequestBody;

export const enableTransactionBatching =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ enableBatching, riskAcknowledged, signal }: Props) => {
    const response = await fetch(`${url}/v1/user/batching`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        enableBatching,
        riskAcknowledged,
      }),
      signal,
    });

    return parseResponse<
      EnableBatchingResponseBody,
      EnableBatchingErrorResponseBody
    >(response);
  };
