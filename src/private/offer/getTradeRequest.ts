import { Contract } from "../../@types/contract";
import { APIError, Currency } from "../../@types/global";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string; requestingOfferId?: string };

export type TradeRequest = {
  amount: number;
  currency: Currency;
  fiatPrice: number;
  paymentMethod: PaymentMethod;
};

type Response = {
  tradeRequest: TradeRequest | null;
  contract?: Contract | null;
  online?: boolean;
};

export const getTradeRequest =
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
