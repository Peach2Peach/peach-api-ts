import {
  GetMatchesErrorResponseBody,
  GetMatchesRequestBody,
  GetMatchesRequestParams,
  GetMatchesRequestQuery,
  GetMatchesResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetMatchesRequestParams & GetMatchesRequestQuery & GetMatchesRequestBody

export const getMatches =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, page = '0', size = '21', timeout, abortSignal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/matches?page=${page}&size=${size}`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'GET',
      signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
    })

    return parseResponse<GetMatchesResponseBody, GetMatchesErrorResponseBody>(response)
  }
