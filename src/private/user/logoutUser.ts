import {
  LogoutUserErrorResponseBody,
  LogoutUserRequestBody,
  LogoutUserRequestParams,
  LogoutUserRequestQuery,
  LogoutUserResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  LogoutUserRequestParams &
  LogoutUserRequestQuery &
  LogoutUserRequestBody;

export const logoutUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/user/logout`, {
      headers: helpers.getPrivateHeaders(url),
      method: "PATCH",
      signal,
    });

    return parseResponse<LogoutUserResponseBody, LogoutUserErrorResponseBody>(
      response
    );
  };
