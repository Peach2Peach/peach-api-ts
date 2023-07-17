import {
  GetOfferDetailsErrorResponseBody,
  GetOfferDetailsRequestBody,
  GetOfferDetailsRequestParams,
  GetOfferDetailsRequestQuery,
  GetOfferDetailsResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetOfferDetailsRequestParams & GetOfferDetailsRequestQuery & GetOfferDetailsRequestBody

export const getOfferDetails
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ offerId, timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/details`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetOfferDetailsResponseBody, GetOfferDetailsErrorResponseBody>(response)
    }
