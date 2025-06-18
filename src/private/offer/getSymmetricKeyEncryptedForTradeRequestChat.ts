import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";

type Props = {
  chatRoomId: string;
  offerType: "buyOffer" | "sellOffer";
};

export const getSymmetricKeyEncryptedForTradeRequestChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ chatRoomId, offerType }: Props) => {
    const response = await fetch(
      `${url}/v1/chat/tradeRequest/${offerType}/${chatRoomId}/symmetricKeyEncrypted`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
      },
    );

    return parseResponse<string, APIError<"FORM_INVALID" | "UNAUTHORIZED">>(
      response,
    );
  };
