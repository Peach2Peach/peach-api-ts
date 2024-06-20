import {
  EstimateFeesErrorResponseBody,
  EstimateFeesRequestBody,
  EstimateFeesRequestParams,
  EstimateFeesRequestQuery,
  EstimateFeesResponseBody,
} from "../../@types/api/electrsAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  EstimateFeesRequestParams &
  EstimateFeesRequestQuery &
  EstimateFeesRequestBody;

export const getFeeEstimate =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/estimateFees`, {
      headers: helpers.getPublicHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<
      EstimateFeesResponseBody,
      EstimateFeesErrorResponseBody
    >(response);
  };
