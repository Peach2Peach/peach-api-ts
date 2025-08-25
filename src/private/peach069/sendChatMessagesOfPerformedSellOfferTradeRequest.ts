import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

export type GetChatMessagesOfPerformedSellOfferTradeRequestParams = {
  sellOfferId: string;
};
export type GetChatMessagesOfPerformedSellOfferTradeRequestQuery = {};
export type GetChatMessagesOfPerformedSellOfferTradeRequestBody = {
  messageEncrypted: string;
};

type Props = RequestProps &
  GetChatMessagesOfPerformedSellOfferTradeRequestParams &
  GetChatMessagesOfPerformedSellOfferTradeRequestQuery &
  GetChatMessagesOfPerformedSellOfferTradeRequestBody;

export const sendChatMessagesOfPerformedSellOfferTradeRequest =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ sellOfferId, messageEncrypted }: Props) => {
    const finalUrl = `${url}/v069/sellOffer/${sellOfferId}/tradeRequestPerformed/chat`;

    const response = await helpers.fetch(finalUrl, {
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
