import {
  UnblockUserErrorResponseBody,
  UnblockUserRequestBody,
  UnblockUserRequestParams,
  UnblockUserRequestQuery,
  UnblockUserResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  UnblockUserRequestParams &
  UnblockUserRequestQuery &
  UnblockUserRequestBody;

export const unblockUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ userId, signal }: Props) => {
    const response = await helpers.fetch(`${url}/v1/user/${userId}/block`, {
      headers: helpers.getPrivateHeaders(url),
      method: "DELETE",
      signal,
    });

    return parseResponse<UnblockUserResponseBody, UnblockUserErrorResponseBody>(
      response,
    );
  };
