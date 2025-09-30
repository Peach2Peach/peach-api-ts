import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetChatMessagesOfPerformedBuyOfferTradeRequestParams = {
  buyOfferId: string;
};
export type GetChatMessagesOfPerformedBuyOfferTradeRequestQuery = {};
export type GetChatMessagesOfPerformedBuyOfferTradeRequestBody = {
  messageEncrypted: string;
  signature?: string;
};

type Props = RequestProps &
  GetChatMessagesOfPerformedBuyOfferTradeRequestParams &
  GetChatMessagesOfPerformedBuyOfferTradeRequestQuery &
  GetChatMessagesOfPerformedBuyOfferTradeRequestBody;

export const sendChatMessagesOfPerformedBuyOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ buyOfferId, messageEncrypted, signature }: Props) => {
    const finalUrl = `${url}/v069/buyOffer/${buyOfferId}/tradeRequestPerformed/chat`;

    const response = await helpers.fetch(finalUrl, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        messageEncrypted,
        signature
      }),
    });

    return parseResponse<void, APIError<"UNAUTHORIZED" | "NOT_FOUND">>(
      response,
    );
  };
