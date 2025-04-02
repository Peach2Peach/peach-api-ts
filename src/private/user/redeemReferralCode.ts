import {
  RedeemReferralCodeErrorResponseBody,
  RedeemReferralCodeRequestBody,
  RedeemReferralCodeRequestParams,
  RedeemReferralCodeRequestQuery,
  RedeemReferralCodeResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  RedeemReferralCodeRequestParams &
  RedeemReferralCodeRequestQuery &
  RedeemReferralCodeRequestBody;

export const redeemReferralCode =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ code, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/user/referral/redeem/referralCode`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "PATCH",
        body: JSON.stringify({
          code,
        }),
        signal,
      }
    );

    return parseResponse<
      RedeemReferralCodeResponseBody,
      RedeemReferralCodeErrorResponseBody
    >(response);
  };
