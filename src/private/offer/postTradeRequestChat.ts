import {
  PostTradeRequestChatErrorResponseBody,
  PostTradeRequestChatRequestBody,
  PostTradeRequestChatRequestParams,
  PostTradeRequestChatRequestQuery,
  PostTradeRequestChatResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  PostTradeRequestChatRequestParams &
  PostTradeRequestChatRequestQuery &
  PostTradeRequestChatRequestBody;

export const postTradeRequestChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, requestingUserId, message, signature, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/tradeRequest/${requestingUserId}/chat`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          message,
          signature,
        }),
        signal,
      },
    );

    return parseResponse<
      PostTradeRequestChatResponseBody,
      PostTradeRequestChatErrorResponseBody
    >(response);
  };
