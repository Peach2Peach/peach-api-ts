import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";
import { TradeRequestForBuyOffer } from "./getTradeRequestsForBuyOffer";

type Props = RequestProps & { offerId: string; requestingOfferId?: string };

type Response = TradeRequestForBuyOffer | null;

export const getTradeRequestForBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, requestingOfferId, signal }: Props) => {
    let route = `${url}/v1/offer/${offerId}/tradeRequest`;
    if (requestingOfferId) {
      route += `/${requestingOfferId}`;
    }
    const response = await fetch(route, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<Response, APIError<"NOT_FOUND">>(response);
  };
