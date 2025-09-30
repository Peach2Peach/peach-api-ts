import { Contract } from "../../@types/contract";
import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type AcceptBuyOfferTradeRequestByIdsRequestParams = {
  buyOfferId: string;
  userId: string;
};
export type AcceptBuyOfferTradeRequestByIdsRequestQuery = {};
export type AcceptBuyOfferTradeRequestByIdsRequestBody = {
  paymentDataEncrypted: string;
  paymentDataSignature: string;
};

type Props = RequestProps &
  AcceptBuyOfferTradeRequestByIdsRequestParams &
  AcceptBuyOfferTradeRequestByIdsRequestQuery &
  AcceptBuyOfferTradeRequestByIdsRequestBody;

export const acceptBuyOfferTradeRequestReceivedByIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    buyOfferId,
    userId,
    paymentDataEncrypted,
    paymentDataSignature,
  }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestReceived/${userId}/accept`;

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        paymentDataEncrypted,
        paymentDataSignature,
      }),
    });

    return parseResponse<Contract, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
