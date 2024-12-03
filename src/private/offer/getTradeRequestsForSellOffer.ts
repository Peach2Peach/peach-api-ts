import { APIError, Currency } from "../../@types/global";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };

export type TradeRequestForSellOffer = {
  userId: string;
  currency: Currency;
  fiatPrice: number;
  paymentMethod: PaymentMethod;
  symmetricKeyEncrypted: string;
  symmetricKeySignature: string;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  maxMiningFeeRate?: number;
};

type Response = {
  tradeRequests: TradeRequestForSellOffer[];
};

export const getTradeRequestsForSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/sell/tradeRequests`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<Response, APIError<"NOT_FOUND">>(response);
  };
