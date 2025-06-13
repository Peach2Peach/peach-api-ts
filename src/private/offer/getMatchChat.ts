import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

import {
  GetMatchChatErrorResponseBody,
  GetMatchChatRequestBody,
  GetMatchChatRequestParams,
  GetMatchChatRequestQuery,
  GetMatchChatResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";

type Props = RequestProps &
  GetMatchChatRequestParams &
  GetMatchChatRequestQuery &
  GetMatchChatRequestBody;

export const getMatchChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, matchingOfferId, page = 0, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/match/${matchingOfferId}/chat?page=${page}`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      },
    );

    return parseResponse<
      GetMatchChatResponseBody,
      GetMatchChatErrorResponseBody
    >(response);
  };
