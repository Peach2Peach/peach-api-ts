import { APIError } from "../../@types/global";
import { BuyOfferSummary } from "../../@types/match";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  offerId: string;
  requestingOfferId?: string;
};

export const getBuyOfferSummary =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, requestingOfferId }: Props) => {
    let API_URL = `${url}/v1/offer/buy/summary/${offerId}`;
    if (requestingOfferId) API_URL += `/${requestingOfferId}`;
    const response = await fetch(API_URL, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<BuyOfferSummary, APIError<"INTERNAL_SERVER_ERROR">>(
      response,
    );
  };
