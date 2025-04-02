import { PostOfferErrorResponseBody } from "../../@types/api/offerAPI";
import {
  InstantTradeCriteria,
  OfferPaymentData,
  SellOffer,
} from "../../@types/offer";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  type: "ask";
  amount: number;
  premium?: number;
  returnAddress?: string;
  multi?: number;
  instantTradeCriteria?: InstantTradeCriteria;
  meansOfPayment: MeansOfPayment;
  paymentData: OfferPaymentData;
  signal?: AbortSignal;
};

export const postSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    type,
    meansOfPayment,
    paymentData,
    amount,
    premium,
    returnAddress,
    multi,
    instantTradeCriteria,
    signal,
  }: Props) => {
    const response = await fetch(`${url}/v1/offer`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        type,
        meansOfPayment,
        paymentData,
        amount,
        premium,
        returnAddress,
        multi,
        instantTradeCriteria,
      }),
      signal,
    });

    return parseResponse<SellOffer | SellOffer[], PostOfferErrorResponseBody>(
      response
    );
  };
