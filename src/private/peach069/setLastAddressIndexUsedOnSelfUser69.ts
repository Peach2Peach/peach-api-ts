import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type SetLastAddressUsedOnSelfUserParams = {};
export type SetLastAddressUsedOnSelfUserQuery = {};
export type SetLastAddressUsedOnSelfUserBody = {
  index: number;
};

type Props = RequestProps &
  SetLastAddressUsedOnSelfUserParams &
  SetLastAddressUsedOnSelfUserQuery &
  SetLastAddressUsedOnSelfUserBody;

export const setLastAddressIndexUsedOnSelfUser69 =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ index }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/lastAddressUsedIndex`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        index,
      }),
    });

    return parseResponse<
      {
        success: boolean;
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
