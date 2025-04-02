import {
  GetEventsErrorResponseBody,
  GetEventsRequestBody,
  GetEventsRequestParams,
  GetEventsRequestQuery,
  GetEventsResponseBody,
} from "../../@types/api/eventAPI";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type Props = RequestProps &
  GetEventsRequestParams &
  GetEventsRequestQuery &
  GetEventsRequestBody;

export const getEvents =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/events`, {
      headers: helpers.getPublicHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<GetEventsResponseBody, GetEventsErrorResponseBody>(
      response
    );
  };
