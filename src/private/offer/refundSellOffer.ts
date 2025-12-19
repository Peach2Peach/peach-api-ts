import {
  RefundSellOfferErrorResponseBody,
  RefundSellOfferRequestBody,
  RefundSellOfferRequestParams,
  RefundSellOfferRequestQuery,
  RefundSellOfferResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  RefundSellOfferRequestParams &
  RefundSellOfferRequestQuery &
  RefundSellOfferRequestBody;

export const refundSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, tx, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/refund`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          tx,
        }),
        signal,
      },
    );

    return parseResponse<
      RefundSellOfferResponseBody,
      RefundSellOfferErrorResponseBody
    >(response);
  };
