import { APIError } from "../../@types/global";
import { Offer69TradeRequestChatMessage } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetChatMessagesOfReceivedSellOfferTradeRequestParams = {
  sellOfferId: number;
  userId: string;
};
export type GetChatMessagesOfReceivedSellOfferTradeRequestQuery = {};
export type GetChatMessagesOfReceivedSellOfferTradeRequestBody = {};

type Props = RequestProps &
  GetChatMessagesOfReceivedSellOfferTradeRequestParams &
  GetChatMessagesOfReceivedSellOfferTradeRequestQuery &
  GetChatMessagesOfReceivedSellOfferTradeRequestBody;

export const getChatMessagesOfReceivedSellOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId, userId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestReceived/${userId}/chat`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      Offer69TradeRequestChatMessage[],
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
