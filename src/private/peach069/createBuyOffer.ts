import { PostOfferErrorResponseBody } from "../../@types/api/offerAPI";
import {
  ExperienceLevel,
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
  releaseAddresses?: string[];
  releaseAddressMessageSignatures?: string[];
  peachUserSignatures?: string[];
  premium: number;
  minReputation?: number;
  instantTradeCriteria?: InstantTradeCriteria;
  experienceLevelCriteria?: ExperienceLevel;
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
    peachUserSignatures,
    premium,
    minReputation,
    instantTradeCriteria,
    experienceLevelCriteria,
    multi,
  }: Props) => {
    const response = await helpers.fetchWithAuth(`${url}/v069/buyOffer`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        amount,
        meansOfPayment,
        paymentData,
        releaseAddresses,
        releaseAddressMessageSignatures,
        peachUserSignatures,
        premium,
        minReputation,
        instantTradeCriteria,
        multi,
        experienceLevelCriteria,
        version: 2,
      }),
    });
    return parseResponse<{ ids: number[] }, PostOfferErrorResponseBody>(
      response,
    );
  };
