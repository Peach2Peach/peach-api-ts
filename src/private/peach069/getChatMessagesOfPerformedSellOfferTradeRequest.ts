import { APIError } from "../../@types/global";
import { Offer69TradeRequestChatMessage } from "../../@types/offer";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetChatMessagesOfPerformedSellOfferTradeRequestParams = {
  sellOfferId: string;
};
export type GetChatMessagesOfPerformedSellOfferTradeRequestQuery = {};
export type GetChatMessagesOfPerformedSellOfferTradeRequestBody = {};

type Props = RequestProps &
  GetChatMessagesOfPerformedSellOfferTradeRequestParams &
  GetChatMessagesOfPerformedSellOfferTradeRequestQuery &
  GetChatMessagesOfPerformedSellOfferTradeRequestBody;

export const getChatMessagesOfPerformedSellOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestPerformed/chat`;

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
    });

    return parseResponse<
      Offer69TradeRequestChatMessage[],
      APIError<"UNAUTHORIZED" | "NOT_FOUND">
    >(response);
  };
