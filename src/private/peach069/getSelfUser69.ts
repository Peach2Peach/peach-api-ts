import { APIError } from "../../@types/global";
import { User69 } from "../../@types/user69";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

export const getSelfUser69 =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async () => {
    const endpointUrl = `${url}/v069/selfUser/`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      {
        user: User69;
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
