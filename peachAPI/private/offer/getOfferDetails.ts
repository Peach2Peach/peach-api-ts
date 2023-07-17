import {
  GetOfferDetailsErrorResponseBody,
  GetOfferDetailsRequestBody,
  GetOfferDetailsRequestParams,
  GetOfferDetailsRequestQuery,
  GetOfferDetailsResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & GetOfferDetailsRequestParams & GetOfferDetailsRequestQuery & GetOfferDetailsRequestBody

export const getOfferDetails
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/details`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetOfferDetailsResponseBody, GetOfferDetailsErrorResponseBody>(response)
    }
