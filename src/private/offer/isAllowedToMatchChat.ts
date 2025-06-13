import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

import {
  GetMatchChatErrorResponseBody,
  GetMatchChatRequestParams,
  IsAllowedToMatchChatResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";

type Props = RequestProps & GetMatchChatRequestParams;

export const isAllowedToMatchChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, matchingOfferId }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/match/${matchingOfferId}/chat/isAllowed`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
      },
    );

    return parseResponse<
      IsAllowedToMatchChatResponseBody,
      GetMatchChatErrorResponseBody
    >(response);
  };
