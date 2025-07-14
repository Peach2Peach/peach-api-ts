import { Contract } from "../../@types/contract";
import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type AcceptSellOfferTradeRequestByIdsRequestParams = {
  sellOfferId: string;
  userId: string;
};
export type AcceptSellOfferTradeRequestByIdsRequestQuery = {};
export type AcceptSellOfferTradeRequestByIdsRequestBody = {
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  paymentData: string;
};

type Props = RequestProps &
  AcceptSellOfferTradeRequestByIdsRequestParams &
  AcceptSellOfferTradeRequestByIdsRequestQuery &
  AcceptSellOfferTradeRequestByIdsRequestBody;

export const acceptSellOfferTradeRequestReceivedByIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    sellOfferId,
    userId,
    paymentDataEncrypted,
    paymentDataSignature,
    paymentData,
  }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestReceived/${userId}/accept`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        paymentDataEncrypted,
        paymentDataSignature,
        paymentData,
      }),
    });

    return parseResponse<Contract, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
