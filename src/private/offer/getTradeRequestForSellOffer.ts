import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";
import { TradeRequestForSellOffer } from "./getTradeRequestsForSellOffer";

type Props = RequestProps & { offerId: string; requestingOfferId?: string };

type Response = (TradeRequestForSellOffer & { amount: number }) | null;

export const getTradeRequestForSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, requestingOfferId, signal }: Props) => {
    let route = `${url}/v1/offer/sell/${offerId}/tradeRequest`;
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
