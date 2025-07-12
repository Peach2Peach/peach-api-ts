import { APIError } from "../../@types/global";
import { Offer69TradeRequestChatMessage } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetChatMessagesOfReceivedBuyOfferTradeRequestParams = {
  buyOfferId: number;
  userId: string;
};
export type GetChatMessagesOfReceivedBuyOfferTradeRequestQuery = {};
export type GetChatMessagesOfReceivedBuyOfferTradeRequestBody = {};

type Props = RequestProps &
  GetChatMessagesOfReceivedBuyOfferTradeRequestParams &
  GetChatMessagesOfReceivedBuyOfferTradeRequestQuery &
  GetChatMessagesOfReceivedBuyOfferTradeRequestBody;

export const getChatMessagesOfReceivedBuyOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId, userId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestReceived/${userId}/chat`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      Offer69TradeRequestChatMessage[],
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
