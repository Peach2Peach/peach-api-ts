import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type SetFilterOfferAlertsOnSelfUserParams = {};
export type SetFilterOfferAlertsOnSelfUserQuery = {};
export type SetFilterOfferAlertsOnSelfUserBody = {
  active: boolean;
};

type Props = RequestProps &
  SetFilterOfferAlertsOnSelfUserParams &
  SetFilterOfferAlertsOnSelfUserQuery &
  SetFilterOfferAlertsOnSelfUserBody;

export const setFilterOfferAlertsOnSelfUser69 =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ active }: Props) => {
    const endpointUrl = `${url}/v069/selfUser/toggleOfferFilterNotification`;

    const response = await helpers.fetchWithAuth(endpointUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        active,
      }),
    });

    return parseResponse<
      {
        success: boolean;
      },
      APIError<"UNAUTHORIZED">
    >(response);
  };
