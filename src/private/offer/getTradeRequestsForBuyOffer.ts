import { APIError, Currency } from "../../@types/global";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };

export type TradeRequestForBuyOffer = {
  userId: string;
  requestingUserId: string;
  amount: number;
  currency: Currency;
  fiatPrice: number;
  paymentMethod: PaymentMethod;
  symmetricKeyEncrypted: string;
  symmetricKeySignature: string;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  maxMiningFeeRate?: number;
  requestingOfferId: string | undefined;
};

type Response = {
  tradeRequests: TradeRequestForBuyOffer[];
};

export const getTradeRequestsForBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/buy/tradeRequests`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<Response, APIError<"NOT_FOUND">>(response);
  };
