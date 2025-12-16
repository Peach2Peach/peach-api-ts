import { APIError } from "../../@types/global";
import { SellOffer69TradeRequest } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetSellOfferTradeRequestReceivedByIdsRequestParams = {
  sellOfferId: number;
  userId: string;
};
export type GetSellOfferTradeRequestReceivedByIdsRequestQuery = {};
export type GetSellOfferTradeRequestReceivedByIdsRequestBody = {};

type Props = RequestProps &
  GetSellOfferTradeRequestReceivedByIdsRequestParams &
  GetSellOfferTradeRequestReceivedByIdsRequestQuery &
  GetSellOfferTradeRequestReceivedByIdsRequestBody;

export const getSellOfferTradeRequestReceivedByIds =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId, userId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestReceived/${userId}`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      SellOffer69TradeRequest,
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
