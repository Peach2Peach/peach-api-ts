import {
  RegisterErrorResponseBody,
  RegisterRequestBody,
  RegisterRequestParams,
  RegisterRequestQuery,
  RegisterResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  RegisterRequestParams &
  RegisterRequestQuery &
  RegisterRequestBody;

export const register =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ publicKey, message, signature, uniqueId, signal }: Props) => {
    const response = await fetch(`${url}/v1/user/register`, {
      headers: helpers.getPublicHeaders(url),
      method: "POST",
      body: JSON.stringify({
        publicKey,
        uniqueId,
        message,
        signature,
      }),
      signal,
    });
    return parseResponse<RegisterResponseBody, RegisterErrorResponseBody>(
      response
    );
  };
