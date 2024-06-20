import {
  SetMessagesReadByUserErrorResponseBody,
  SetMessagesReadByUserRequestBody,
  SetMessagesReadByUserRequestParams,
  SetMessagesReadByUserRequestQuery,
  SetMessagesReadByUserResponseBody,
} from "../../@types/api/contractAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  SetMessagesReadByUserRequestParams &
  SetMessagesReadByUserRequestQuery &
  SetMessagesReadByUserRequestBody;

export const setMessageRead =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, start, end, signal }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/chat`, {
      headers: helpers.getPrivateHeaders(url),
      method: "POST",
      body: JSON.stringify({
        start,
        end,
      }),
      signal,
    });

    return parseResponse<
      SetMessagesReadByUserResponseBody,
      SetMessagesReadByUserErrorResponseBody
    >(response);
  };
