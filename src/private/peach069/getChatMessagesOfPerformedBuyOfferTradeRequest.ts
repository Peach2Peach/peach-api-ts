import { APIError } from "../../@types/global";
import { Offer69TradeRequestChatMessage } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetChatMessagesOfPerformedBuyOfferTradeRequestParams = {
  buyOfferId: number;
};
export type GetChatMessagesOfPerformedBuyOfferTradeRequestQuery = {};
export type GetChatMessagesOfPerformedBuyOfferTradeRequestBody = {};

type Props = RequestProps &
  GetChatMessagesOfPerformedBuyOfferTradeRequestParams &
  GetChatMessagesOfPerformedBuyOfferTradeRequestQuery &
  GetChatMessagesOfPerformedBuyOfferTradeRequestBody;

export const getChatMessagesOfPerformedBuyOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestPerformed/chat`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      Offer69TradeRequestChatMessage[],
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
