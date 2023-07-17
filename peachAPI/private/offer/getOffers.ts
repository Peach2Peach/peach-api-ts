import {
  GetOffersErrorResponseBody,
  GetOffersRequestBody,
  GetOffersRequestParams,
  GetOffersRequestQuery,
  GetOffersResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetOffersRequestParams & GetOffersRequestQuery & GetOffersRequestBody

export const getOffers
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/offers`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetOffersResponseBody, GetOffersErrorResponseBody>(response)
    }
