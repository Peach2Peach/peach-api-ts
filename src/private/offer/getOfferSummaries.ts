import {
  GetOfferSummariesErrorResponseBody,
  GetOfferSummariesRequestBody,
  GetOfferSummariesRequestParams,
  GetOfferSummariesRequestQuery,
  GetOfferSummariesResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetOfferSummariesRequestParams &
  GetOfferSummariesRequestQuery &
  GetOfferSummariesRequestBody;

export const getOfferSummaries =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/offers/summary`, {
      headers: helpers.getPrivateHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<
      GetOfferSummariesResponseBody,
      GetOfferSummariesErrorResponseBody
    >(response);
  };
