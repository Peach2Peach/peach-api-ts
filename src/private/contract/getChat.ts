import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

import {
  GetChatErrorResponseBody,
  GetChatRequestBody,
  GetChatRequestParams,
  GetChatRequestQuery,
  GetChatResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";

type Props = RequestProps &
  GetChatRequestParams &
  GetChatRequestQuery &
  GetChatRequestBody;

export const getChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, page = 0, signal }: Props) => {
    const response = await fetch(
      `${url}/v1/contract/${contractId}/chat?page=${page}`,
      {
        headers: helpers.getPrivateHeaders(url),
        method: "GET",
        signal,
      }
    );

    return parseResponse<GetChatResponseBody, GetChatErrorResponseBody>(
      response
    );
  };
