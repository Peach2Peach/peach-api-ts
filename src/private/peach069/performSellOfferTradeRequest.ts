import { APIError, Currency } from "../../@types/global";
import { SellOffer69TradeRequest } from "../../@types/offer";
import { PaymentMethod } from "../../@types/payment";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type PerformSellOfferTradeRequestRequestParams = { sellOfferId: string };
export type PerformSellOfferTradeRequestRequestQuery = {};
export type PerformSellOfferTradeRequestRequestBody = {
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
  PerformSellOfferTradeRequestRequestParams &
  PerformSellOfferTradeRequestRequestQuery &
  PerformSellOfferTradeRequestRequestBody;

export const performSellOfferTradeRequest =
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
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestPerformed`;

    const response = await fetch(finalUrl, {
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

    return parseResponse<
      SellOffer69TradeRequest,
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
