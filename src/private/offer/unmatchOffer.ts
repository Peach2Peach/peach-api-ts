import {
  UnmatchOfferErrorResponseBody,
  UnmatchOfferRequestBody,
  UnmatchOfferRequestParams,
  UnmatchOfferRequestQuery,
  UnmatchOfferResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  UnmatchOfferRequestParams &
  UnmatchOfferRequestQuery &
  UnmatchOfferRequestBody;

export const unmatchOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, matchingOfferId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/match`, {
      headers: helpers.getPrivateHeaders(url),
      body: JSON.stringify({
        matchingOfferId,
      }),
      method: "DELETE",
      signal,
    });

    return parseResponse<
      UnmatchOfferResponseBody,
      UnmatchOfferErrorResponseBody
    >(response);
  };
