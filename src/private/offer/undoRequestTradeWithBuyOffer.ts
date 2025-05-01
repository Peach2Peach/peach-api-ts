import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  offerId: string;
};

type Response = {
  offerId: string;
};

export const undoRequestTradeWithBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/buy/undoTradeRequest`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "DELETE",
      },
    );

    return parseResponse<Response, APIError<"INTERNAL_SERVER_ERROR">>(response);
  };
