import {
  PostMatchChatErrorResponseBody,
  PostMatchChatRequestBody,
  PostMatchChatRequestParams,
  PostMatchChatRequestQuery,
  PostMatchChatResponseBody,
} from "../../@types/api/offerAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  PostMatchChatRequestParams &
  PostMatchChatRequestQuery &
  PostMatchChatRequestBody;

export const postMatchChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, matchingOfferId, message, signature, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/offer/${offerId}/match/${matchingOfferId}/chat`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "POST",
        body: JSON.stringify({
          message,
          signature,
        }),
        signal,
      },
    );

    return parseResponse<
      PostMatchChatResponseBody,
      PostMatchChatErrorResponseBody
    >(response);
  };
