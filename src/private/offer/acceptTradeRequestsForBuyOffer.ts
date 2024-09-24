import { APIError } from "../../@types/global";
import { OfferPaymentData } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  offerId: string;
  userId: string;
  paymentData: OfferPaymentData;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  maxMiningFeeRate?: number;
};

type Response = {
  contractId: string;
};

export const acceptTradeRequestForBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    userId,
    paymentData,
    paymentDataEncrypted,
    paymentDataSignature,
    maxMiningFeeRate,
  }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/buy/acceptTradeRequest`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          userId,
          paymentData,
          paymentDataEncrypted,
          paymentDataSignature,
          maxMiningFeeRate,
        }),
      }
    );

    return parseResponse<Response, APIError<"INTERNAL_SERVER_ERROR">>(response);
  };
