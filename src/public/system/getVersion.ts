import { APIError } from '../../@types/global';
import { parseResponse } from '../../helpers/parseResponse';
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types';

type GetVersionResponseBody = {
  latestAppVersion: string;
  minAppVersion: string;
};
type GetVersionErrorResponseBody = APIError<null>;

export const getVersion = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: RequestProps = {}) => {
    const response = await fetch(`${url}/v1/version`, {
      headers: {
        ...helpers.getPublicHeaders(url),
        'Cache-Control': 'no-cache',
      },
      method: 'GET',
      signal,
    });

    return parseResponse<GetVersionResponseBody, GetVersionErrorResponseBody>(response);
  };