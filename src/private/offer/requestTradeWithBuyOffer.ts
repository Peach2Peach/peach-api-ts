import { APIError, Currency } from "../../@types/global";
import { OfferPaymentData } from "../../@types/offer";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & {
  offerId: string;
  amount: number;
  premium: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  paymentData: OfferPaymentData;
  refundAddress: string;
  symmetricKeyEncrypted: string;
  symmetricKeySignature: string;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  instantTrade?: boolean;
};

type RequestTradeResponseBody =
  | {
      contractId: string;
    }
  | {
      matchedPrice: number;
    };

type RequestTradeErrorResponseBody = APIError<
  | "NOT_FOUND"
  | "UNAUTHORIZED"
  | "CANNOT_MATCH"
  | "FORM_INVALID"
  | "CANNOT_DOUBLEMATCH"
  | "TRANSACTION_INVALID"
  | "TRADING_LIMIT_REACHED"
  | "OFFER_TAKEN"
>;

export const requestTradeWithBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    amount,
    premium,
    currency,
    paymentMethod,
    paymentData,
    refundAddress,
    symmetricKeyEncrypted,
    symmetricKeySignature,
    paymentDataEncrypted,
    paymentDataSignature,
    instantTrade,
    signal,
  }: Props) => {
    const response = await fetch(`${url}/v1/offer/buy/tradeRequest`, {
      headers: helpers.getPrivateHeaders(url),
      body: JSON.stringify({
        offerId,
        amount,
        premium,
        currency,
        paymentMethod,
        paymentData,
        refundAddress,
        symmetricKeyEncrypted,
        symmetricKeySignature,
        paymentDataEncrypted,
        paymentDataSignature,
        instantTrade,
      }),
      method: "POST",
      signal,
    });

    return parseResponse<
      RequestTradeResponseBody,
      RequestTradeErrorResponseBody
    >(response);
  };
