import {
  BlockUserErrorResponseBody,
  BlockUserRequestBody,
  BlockUserRequestParams,
  BlockUserRequestQuery,
  BlockUserResponseBody,
} from "../../@types/api/userAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  BlockUserRequestParams &
  BlockUserRequestQuery &
  BlockUserRequestBody;

export const blockUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ userId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/user/${userId}/block`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "PUT",
        signal,
      },
    );

    return parseResponse<BlockUserResponseBody, BlockUserErrorResponseBody>(
      response,
    );
  };
