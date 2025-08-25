import { Contract } from "../../@types/contract";
import { APIError, Currency } from "../../@types/global";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type performInstantTradeWithSellOfferByIdRequestParams = {
  sellOfferId: string;
};
export type performInstantTradeWithSellOfferByIdRequestQuery = {};
export type performInstantTradeWithSellOfferByIdRequestBody = {
  paymentMethod: PaymentMethod;
  currency: Currency;
  paymentDataHashed: any;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  symmetricKeyEncrypted: string;
  symmetricKeySignature: string;
  maxMiningFeeRate: number;
  releaseAddress: string;
  releaseAddressMessageSignature: string;
};

type Props = RequestProps &
  performInstantTradeWithSellOfferByIdRequestParams &
  performInstantTradeWithSellOfferByIdRequestQuery &
  performInstantTradeWithSellOfferByIdRequestBody;

export const performInstantTradeWithSellOfferById =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    sellOfferId,
    paymentMethod,
    currency,
    paymentDataHashed,
    paymentDataEncrypted,
    paymentDataSignature,
    symmetricKeyEncrypted,
    symmetricKeySignature,
    maxMiningFeeRate,
    releaseAddress,
    releaseAddressMessageSignature,
  }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/performInstantTrade`;

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        paymentMethod,
        currency,
        paymentDataHashed,
        paymentDataEncrypted,
        paymentDataSignature,
        symmetricKeyEncrypted,
        symmetricKeySignature,
        maxMiningFeeRate,
        releaseAddress,
        releaseAddressMessageSignature,
      }),
    });

    return parseResponse<Contract, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
