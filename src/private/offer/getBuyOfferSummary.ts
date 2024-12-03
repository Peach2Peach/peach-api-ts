import { APIError } from "../../@types/global";
import { BuyOfferSummary } from "../../@types/match";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  offerId: string;
};

export const getBuyOfferSummary =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId }: Props) => {
    const response = await fetch(`${url}/v1/offer/buy/summary/${offerId}`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<BuyOfferSummary, APIError<"INTERNAL_SERVER_ERROR">>(
      response,
    );
  };
