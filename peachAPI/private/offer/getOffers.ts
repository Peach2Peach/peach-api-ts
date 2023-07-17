import {
  GetOffersErrorResponseBody,
  GetOffersRequestBody,
  GetOffersRequestParams,
  GetOffersRequestQuery,
  GetOffersResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & GetOffersRequestParams & GetOffersRequestQuery & GetOffersRequestBody

export const getOffers
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/offers`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetOffersResponseBody, GetOffersErrorResponseBody>(response)
    }
