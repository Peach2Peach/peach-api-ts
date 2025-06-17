import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  offerId: string;
  requestingOfferId?: string;
};

type Response = {
  offerId: string;
};

export const undoRequestTradeWithBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, requestingOfferId }: Props) => {
    let API_URL = `${url}/v1/offer/${offerId}/buy/undoTradeRequest`;
    if (requestingOfferId) {
      API_URL += `${requestingOfferId}`;
    }
    const response = await fetch(API_URL, {
      headers: helpers.getPrivateHeaders(url),
      method: "DELETE",
    });

    return parseResponse<
      Response,
      APIError<"INTERNAL_SERVER_ERROR" | "NOT_FOUND">
    >(response);
  };
