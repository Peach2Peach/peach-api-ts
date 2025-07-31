import { PostOfferErrorResponseBody } from "../../@types/api/offerAPI";
import {
  BuyOffer69,
  InstantTradeCriteria,
  OfferPaymentData,
} from "../../@types/offer";
import { MeansOfPayment } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type CreateBuyOfferRequestParams = {};
export type CreateBuyOfferRequestQuery = {};
export type CreateOfferRequestBody = {
  meansOfPayment: MeansOfPayment;
  paymentData: OfferPaymentData;
};

export type CreateBuyOfferRequestBody = CreateOfferRequestBody & {
  amount: number;
  releaseAddress: string;
  releaseAddressMessageSignature: string;
  premium: number;
  minReputation?: number;
  instantTradeCriteria?: InstantTradeCriteria;
};

type Props = RequestProps &
  CreateBuyOfferRequestParams &
  CreateBuyOfferRequestQuery &
  CreateBuyOfferRequestBody;

export const createBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    amount,
    meansOfPayment,
    paymentData,
    releaseAddress,
    releaseAddressMessageSignature,
    premium,
    minReputation,
    instantTradeCriteria,
  }: Props) => {
    const response = await fetch(`${url}/v069/buyOffer`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        amount,
        meansOfPayment,
        paymentData,
        releaseAddress,
        releaseAddressMessageSignature,
        premium,
        minReputation,
        instantTradeCriteria,
      }),
    });
    return parseResponse<BuyOffer69, PostOfferErrorResponseBody>(response);
  };
