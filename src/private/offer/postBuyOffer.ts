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
  multi?: number;
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
    multi,
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
        multi,
      }),
      signal,
    });

    return parseResponse<BuyOffer | BuyOffer[], PostOfferErrorResponseBody>(
      response,
    );
  };
