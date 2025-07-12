import { APIError } from "../../@types/global";
import { BuyOffer69TradeRequest } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetBuyOfferTradeRequestReceivedByIdsRequestParams = {
  buyOfferId: number;
  userId: string;
};
export type GetBuyOfferTradeRequestReceivedByIdsRequestQuery = {};
export type GetBuyOfferTradeRequestReceivedByIdsRequestBody = {};

type Props = RequestProps &
  GetBuyOfferTradeRequestReceivedByIdsRequestParams &
  GetBuyOfferTradeRequestReceivedByIdsRequestQuery &
  GetBuyOfferTradeRequestReceivedByIdsRequestBody;

export const getBuyOfferTradeRequestReceivedByIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId, userId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestReceived/${userId}`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      BuyOffer69TradeRequest,
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
