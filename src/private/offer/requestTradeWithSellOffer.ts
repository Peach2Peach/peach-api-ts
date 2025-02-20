import { APIError } from "../../@types/global";
import { OfferPaymentData } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & {
  offerId: string;
  currency: string;
  paymentMethod: string;
  paymentData: OfferPaymentData;
  releaseAddress: string;
  messageSignature: string;
  maxMiningFeeRate?: number;
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
  | "UNAUTHORIZED"
  | "CANNOT_MATCH"
  | "FORM_INVALID"
  | "CANNOT_DOUBLEMATCH"
  | "TRANSACTION_INVALID"
  | "TRADING_LIMIT_REACHED"
  | "OFFER_TAKEN"
>;

export const requestTradeWithSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    currency,
    paymentMethod,
    paymentData,
    releaseAddress,
    messageSignature,
    maxMiningFeeRate,
    symmetricKeyEncrypted,
    symmetricKeySignature,
    paymentDataEncrypted,
    paymentDataSignature,
    instantTrade,
    requestingOfferId,
    signal,
  }: Props) => {
    const response = await fetch(`${url}/v1/offer/sell/tradeRequest`, {
      headers: helpers.getPrivateHeaders(url),
      body: JSON.stringify({
        offerId,
        currency,
        paymentMethod,
        paymentData,
        releaseAddress,
        messageSignature,
        maxMiningFeeRate,
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
