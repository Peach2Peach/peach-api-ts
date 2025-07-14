import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetChatMessagesOfReceivedSellOfferTradeRequestParams = {
  sellOfferId: string;
  userId: string;
};
export type GetChatMessagesOfReceivedSellOfferTradeRequestQuery = {};
export type GetChatMessagesOfReceivedSellOfferTradeRequestBody = {
  messageEncrypted: string;
};

type Props = RequestProps &
  GetChatMessagesOfReceivedSellOfferTradeRequestParams &
  GetChatMessagesOfReceivedSellOfferTradeRequestQuery &
  GetChatMessagesOfReceivedSellOfferTradeRequestBody;

export const sendChatMessagesOfReceivedSellOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId, userId, messageEncrypted }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestReceived/${userId}/chat`;

    const response = await fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        messageEncrypted,
      }),
    });

    return parseResponse<void, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
