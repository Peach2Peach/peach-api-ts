import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

import {
  GetTradeRequestChatErrorResponseBody,
  GetTradeRequestChatRequestParams,
  IsAllowedToTradeRequestChatResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";

type Props = RequestProps & GetTradeRequestChatRequestParams;

export const isAllowedToTradeRequestChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, requestingUserId }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/tradeRequest/${requestingUserId}/chat/isAllowed`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
      },
    );

    return parseResponse<
      IsAllowedToTradeRequestChatResponseBody,
      GetTradeRequestChatErrorResponseBody
    >(response);
  };
