import {
  GetStatusErrorResponseBody,
  GetStatusRequestBody,
  GetStatusRequestParams,
  GetStatusRequestQuery,
  GetStatusResponseBody,
} from "../../@types/api/systemAPI";
import { parseResponse } from "../../helpers/parseResponse";
import {
  PeachAPIOptions,
  PublicPeachAPIHelpers,
  RequestProps,
} from "../../types";

type Props = RequestProps &
  GetStatusRequestParams &
  GetStatusRequestQuery &
  GetStatusRequestBody;

export const getStatus =
  ({ url }: PeachAPIOptions, helpers: PublicPeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/system/status`, {
      headers: helpers.getPublicHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<GetStatusResponseBody, GetStatusErrorResponseBody>(
      response,
    );
  };
