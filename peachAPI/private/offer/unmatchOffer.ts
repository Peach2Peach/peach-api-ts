import {
  UnmatchOfferErrorResponseBody,
  UnmatchOfferRequestBody,
  UnmatchOfferRequestParams,
  UnmatchOfferRequestQuery,
  UnmatchOfferResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & UnmatchOfferRequestParams & UnmatchOfferRequestQuery & UnmatchOfferRequestBody

export const unmatchOffer
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ offerId, matchingOfferId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/match`, {
        headers: helpers.getPrivateHeaders(url),
        body: JSON.stringify({
          matchingOfferId,
        }),
        method: 'DELETE',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<UnmatchOfferResponseBody, UnmatchOfferErrorResponseBody>(response)
    }
