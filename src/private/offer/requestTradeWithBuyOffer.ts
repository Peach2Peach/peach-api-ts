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
  refundAddress?: string;
  symmetricKeyEncrypted: string;
  symmetricKeySignature: string;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  instantTrade?: boolean;
  requestingOfferId?: string;
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
  | "OFFER_TAKEN"
  | "CANNOT_MATCH"
  | "FORM_INVALID"
  | "TRADING_LIMIT_REACHED"
  | "FORBIDDEN"
  | "INTERNAL_SERVER_ERROR"
  | "PAYMENT_HASH_INVALID"
  | "AUTHENTICATION_FAILED"
  | "UNAVAILABLE_FOR_LEGAL_REASONS"
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
    requestingOfferId,
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
        requestingOfferId,
      }),
      method: "POST",
      signal,
    });

    return parseResponse<
      RequestTradeResponseBody,
      RequestTradeErrorResponseBody
    >(response);
  };
