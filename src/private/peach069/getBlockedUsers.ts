import { APIError } from "../../@types/global";
import { User } from "../../@types/user";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetBlockedUsersRequestParams = {};
export type GetBlockedUsersRequestQuery = {};
export type GetBlockedUsersRequestBody = {};

type Props = RequestProps &
  GetBlockedUsersRequestParams &
  GetBlockedUsersRequestQuery &
  GetBlockedUsersRequestBody;

export const getBlockedUsers =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({}: Props) => {
    const endpointUrl = `${url}/v069/selfUser/blockedUsers`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      {
        users:User[];
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
