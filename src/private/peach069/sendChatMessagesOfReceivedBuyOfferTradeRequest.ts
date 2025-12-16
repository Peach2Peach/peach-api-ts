import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetChatMessagesOfReceivedBuyOfferTradeRequestParams = {
  buyOfferId: string;
  userId: string;
};
export type GetChatMessagesOfReceivedBuyOfferTradeRequestQuery = {};
export type GetChatMessagesOfReceivedBuyOfferTradeRequestBody = {
  messageEncrypted: string;
  signature?: string;
};

type Props = RequestProps &
  GetChatMessagesOfReceivedBuyOfferTradeRequestParams &
  GetChatMessagesOfReceivedBuyOfferTradeRequestQuery &
  GetChatMessagesOfReceivedBuyOfferTradeRequestBody;

export const sendChatMessagesOfReceivedBuyOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId, userId, messageEncrypted, signature }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestReceived/${userId}/chat`;

    const response = await helpers.fetchWithAuth(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        messageEncrypted,
        signature,
      }),
    });

    return parseResponse<void, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
