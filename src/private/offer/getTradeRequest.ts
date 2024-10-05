import { APIError, Currency } from "../../@types/global";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };

export type TradeRequest = {
  amount: number;
  currency: Currency;
  fiatPrice: number;
  paymentMethod: PaymentMethod;
};

type Response = {
  tradeRequest: TradeRequest | null;
};

export const getTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/tradeRequest`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<Response, APIError<"NOT_FOUND">>(response);
  };
