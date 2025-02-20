import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions } from "../../types";

type Props = {
  offerId: string;
  userId: string;
  paymentDataEncrypted: string;
  paymentDataSignature: string;
  requestingOfferId: string | undefined;
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
    requestingOfferId,
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
          requestingOfferId,
        }),
      }
    );

    return parseResponse<Response, APIError<"INTERNAL_SERVER_ERROR">>(response);
  };
