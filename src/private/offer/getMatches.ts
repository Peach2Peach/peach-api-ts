import {
  GetMatchesErrorResponseBody,
  GetMatchesRequestBody,
  GetMatchesRequestParams,
  GetMatchesRequestQuery,
  GetMatchesResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetMatchesRequestParams &
  GetMatchesRequestQuery &
  GetMatchesRequestBody;

export const getMatches =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    page = 0,
    size = 21,
    sortBy = ["bestReputation"],
    signal,
  }: Props) => {
    const response = await helpers.fetch(
      `${url}/v1/offer/${offerId}/matches?page=${page}&size=${size}&sortBy=${sortBy.join(",")}`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<GetMatchesResponseBody, GetMatchesErrorResponseBody>(
      response,
    );
  };
