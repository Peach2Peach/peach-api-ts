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
  releaseAddresses: string[];
  releaseAddressMessageSignatures: string[];
  premium: number;
  minReputation?: number;
  instantTradeCriteria?: InstantTradeCriteria;
  multi?: number;
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
    releaseAddresses,
    releaseAddressMessageSignatures,
    premium,
    minReputation,
    instantTradeCriteria,
    multi,
  }: Props) => {
    const response = await helpers.fetch(`${url}/v069/buyOffer`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        amount,
        meansOfPayment,
        paymentData,
        releaseAddresses,
        releaseAddressMessageSignatures,
        premium,
        minReputation,
        instantTradeCriteria,
        multi,
      }),
    });
    return parseResponse<BuyOffer69, PostOfferErrorResponseBody>(response);
  };
