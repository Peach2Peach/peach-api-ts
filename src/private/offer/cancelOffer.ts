import {
  CancelOfferErrorResponseBody,
  CancelOfferRequestBody,
  CancelOfferRequestParams,
  CancelOfferRequestQuery,
  CancelOfferResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  CancelOfferRequestParams &
  CancelOfferRequestQuery &
  CancelOfferRequestBody;

export const cancelOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await helpers.fetchWithAuth(
      `${url}/v1/offer/${offerId}/cancel`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        signal,
      },
    );

    return parseResponse<CancelOfferResponseBody, CancelOfferErrorResponseBody>(
      response,
    );
  };
