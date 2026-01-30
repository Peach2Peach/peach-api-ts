import {
  GetSummariesForWalletErrorResponseBody,
  GetSummariesForWalletRequestBody,
  GetSummariesForWalletRequestParams,
  GetSummariesForWalletRequestQuery,
  GetSummariesForWalletResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetSummariesForWalletRequestParams &
  GetSummariesForWalletRequestQuery &
  GetSummariesForWalletRequestBody;

export const getSummariesForWallet =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await helpers.fetchWithAuth(`${url}/v1/summaryForWallet`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });
    return parseResponse<
      GetSummariesForWalletResponseBody,
      GetSummariesForWalletErrorResponseBody
    >(response);
  };
