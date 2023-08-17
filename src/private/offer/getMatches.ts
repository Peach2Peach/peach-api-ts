import {
  GetMatchesErrorResponseBody,
  GetMatchesRequestBody,
  GetMatchesRequestParams,
  GetMatchesRequestQuery,
  GetMatchesResponseBody,
} from '../../@types/api/offerAPI'
import { SortBy } from '../../@types/match'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  GetMatchesRequestParams &
  Omit<GetMatchesRequestQuery, 'sortBy'> & { sortBy?: SortBy } & GetMatchesRequestBody

export const getMatches
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ offerId, page, size, sortBy, signal }: Props) => {
      const requestUrl = new URL(`${url}/v1/offer/${offerId}/matches`)

      if (page) requestUrl.searchParams.append('page', page)
      if (size) requestUrl.searchParams.append('size', size)
      if (sortBy) requestUrl.searchParams.append('sortBy', sortBy)

      const response = await fetch(requestUrl.toString(), {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal,
      })

      return parseResponse<GetMatchesResponseBody, GetMatchesErrorResponseBody>(response)
    }
