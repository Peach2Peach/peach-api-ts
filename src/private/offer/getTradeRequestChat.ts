import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

import { Message } from "../../@types/api/chatAPI";
import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";

type Props = RequestProps & {
  chatRoomId: string;
  page?: number;
  offerType: "buyOffer" | "sellOffer";
};

export const getTradeRequestChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerType, chatRoomId, page = 0, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/chat/tradeRequest/${offerType}/${chatRoomId}?page=${page}`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<Message[], APIError<"NOT_FOUND" | "UNAUTHORIZED">>(
      response,
    );
  };
