import { APIError } from "../../@types/global";
import { parseResponse } from "../../helpers/parseResponse";
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from "../../types";

type GetVersionResponseBody = {
  latestAppVersion: string;
  minAppVersion: string;
  minBuildNumber: string
};
type GetVersionErrorResponseBody = APIError<null>;

export const getVersion =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: RequestProps = {}) => {
    const response = await fetch(`${url}/v1/info/version`, {
      headers: helpers.getPublicHeaders(url),
      method: "GET",
      signal,
    });

    return parseResponse<GetVersionResponseBody, GetVersionErrorResponseBody>(
      response,
    );
  };
