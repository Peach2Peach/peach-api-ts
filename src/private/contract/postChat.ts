import {
  PostChatErrorResponseBody,
  PostChatRequestBody,
  PostChatRequestParams,
  PostChatRequestQuery,
  PostChatResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  PostChatRequestParams &
  PostChatRequestQuery &
  PostChatRequestBody;

export const postChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, message, signature, signal }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/chat`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        message,
        signature,
      }),
      signal,
    });

    return parseResponse<PostChatResponseBody, PostChatErrorResponseBody>(
      response,
    );
  };
