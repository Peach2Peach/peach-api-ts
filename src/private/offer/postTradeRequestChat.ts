import { APIError, APISuccess } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps & {
  offerType: "buyOffer" | "sellOffer";
  chatRoomId: string;
  message: string;
  signature: string;
};

export const postTradeRequestChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerType, chatRoomId, message, signature, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/chat/tradeRequest/${offerType}/${chatRoomId}`,
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
      APISuccess,
      APIError<"NOT_FOUND" | "FORM_INVALID" | "UNAUTHORIZED">
    >(response);
  };
