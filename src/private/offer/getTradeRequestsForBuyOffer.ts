import { APIError, Currency } from "../../@types/global";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & { offerId: string };

export type TradeRequestForBuyOffer = {
  userId: string;
  amount: number;
  currency: Currency;
  fiatPrice: number;
  paymentMethod: PaymentMethod;
  symmetricKeyEncrypted: string;
  symmetricKeySignature: string;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  requestingOfferId: string | undefined;
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

    return parseResponse<
      TradeRequestForBuyOffer[],
      APIError<"UNAUTHORIZED" | "AUTHENTICATION_FAILED" | "FORM_INVALID">
    >(response);
  };
