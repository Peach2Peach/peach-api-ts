import { PeachAPIOptions, RequestProps } from '../../types'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { getPrivateHeaders } from '../getPrivateHeaders'
import {
  GetMatchesErrorResponseBody,
  GetMatchesRequestBody,
  GetMatchesRequestParams,
  GetMatchesRequestQuery,
  GetMatchesResponseBody,
} from '../../../@types/offerAPI'

type Props = RequestProps & GetMatchesRequestParams & GetMatchesRequestQuery & GetMatchesRequestBody

export const getMatches
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, page = '0', size = '21', timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/matches?page=${page}&size=${size}`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetMatchesResponseBody, GetMatchesErrorResponseBody>(response)
    }
