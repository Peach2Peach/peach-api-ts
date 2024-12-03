import { APIError } from "../../@types/global";
import { SellOfferSummary } from "../../@types/match";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  offerId: string;
};

export const getSellOfferSummary =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId }: Props) => {
    const response = await fetch(`${url}/v1/offer/sell/summary/${offerId}`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<SellOfferSummary, APIError<"INTERNAL_SERVER_ERROR">>(
      response,
    );
  };
