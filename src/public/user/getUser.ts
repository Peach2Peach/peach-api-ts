import {
  GetUserErrorResponseBody,
  GetUserRequestBody,
  GetUserRequestParams,
  GetUserResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & GetUserRequestParams & GetUserRequestBody;

export const getUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ userId, signal }: Props) => {
    const response = await fetch(`${url}/v1/user/${userId}`, {
      headers: helpers.getPublicHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<GetUserResponseBody, GetUserErrorResponseBody>(
      response,
    );
  };
