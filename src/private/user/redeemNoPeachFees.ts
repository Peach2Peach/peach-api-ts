import {
  RedeemTradesErrorResponseBody,
  RedeemTradesRequestBody,
  RedeemTradesRequestParams,
  RedeemTradesRequestQuery,
  RedeemTradesResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  RedeemTradesRequestParams &
  RedeemTradesRequestQuery &
  RedeemTradesRequestBody;

export const redeemNoPeachFees =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/user/referral/redeem/freeTrades`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "PATCH",
        signal,
      },
    );

    return parseResponse<
      RedeemTradesResponseBody,
      RedeemTradesErrorResponseBody
    >(response);
  };
