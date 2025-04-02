import {
  UpdateUserErrorResponseBody,
  UpdateUserRequestBody,
  UpdateUserRequestParams,
  UpdateUserRequestQuery,
  UpdateUserResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  UpdateUserRequestParams &
  UpdateUserRequestQuery &
  UpdateUserRequestBody;

export const updateUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    pgpPublicKey,
    signature,
    message,
    pgpSignature,
    fcmToken,
    referralCode,
    feeRate,
    signal,
  }: Props) => {
    const response = await fetch(`${url}/v1/user`, {
      headers: helpers.getPrivateHeaders(url),
      method: "PATCH",
      body: JSON.stringify({
        pgpPublicKey,
        signature,
        message,
        pgpSignature,
        fcmToken,
        referralCode,
        feeRate,
      }),
      signal,
    });

    return parseResponse<UpdateUserResponseBody, UpdateUserErrorResponseBody>(
      response
    );
  };
