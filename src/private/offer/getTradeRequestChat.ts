import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

import {
  GetTradeRequestChatErrorResponseBody,
  GetTradeRequestChatRequestBody,
  GetTradeRequestChatRequestParams,
  GetTradeRequestChatRequestQuery,
  GetTradeRequestChatResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";

type Props = RequestProps &
  GetTradeRequestChatRequestParams &
  GetTradeRequestChatRequestQuery &
  GetTradeRequestChatRequestBody;

export const getTradeRequestChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, requestingUserId, page = 0, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/tradeRequest/${requestingUserId}/chat?page=${page}`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<
      GetTradeRequestChatResponseBody,
      GetTradeRequestChatErrorResponseBody
    >(response);
  };
