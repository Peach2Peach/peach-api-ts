import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  offerId: string;
  userId: string;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
};

type Response = {
  contractId: string;
};

export const acceptTradeRequestForSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    userId,
    paymentDataEncrypted,
    paymentDataSignature,
  }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/sell/acceptTradeRequest`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          userId,
          paymentDataEncrypted,
          paymentDataSignature,
        }),
      }
    );

    return parseResponse<Response, APIError<"INTERNAL_SERVER_ERROR">>(response);
  };
