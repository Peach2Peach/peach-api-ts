import { PostOfferErrorResponseBody } from "../../@types/api/offerAPI";
import {
  BuyOffer,
  InstantTradeCriteria,
  OfferPaymentData,
} from "../../@types/offer";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  type: "bid";
  amount: [number, number];
  meansOfPayment: MeansOfPayment;
  paymentData: OfferPaymentData;
  releaseAddress: string;
  messageSignature: string;
  maxPremium?: number | null;
  minReputation?: number | null;
  instantTradeCriteria?: InstantTradeCriteria;
  signal?: AbortSignal;
  multiplier?: number;
};

export const postBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    type,
    amount,
    meansOfPayment,
    paymentData,
    releaseAddress,
    maxPremium,
    minReputation,
    messageSignature,
    instantTradeCriteria,
    signal,
    multiplier,
  }: Props) => {
    const response = await fetch(`${url}/v1/offer`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        type,
        amount,
        meansOfPayment,
        paymentData,
        releaseAddress,
        maxPremium,
        minReputation,
        messageSignature,
        instantTradeCriteria,
        multiplier,
      }),
      signal,
    });

    return parseResponse<BuyOffer, PostOfferErrorResponseBody>(response);
  };
