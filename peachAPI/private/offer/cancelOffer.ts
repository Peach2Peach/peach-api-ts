import {
  CancelOfferErrorResponseBody,
  CancelOfferRequestBody,
  CancelOfferRequestParams,
  CancelOfferRequestQuery,
  CancelOfferResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & CancelOfferRequestParams & CancelOfferRequestQuery & CancelOfferRequestBody

export const cancelOffer
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, satsPerByte, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/cancel`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({ satsPerByte }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<CancelOfferResponseBody, CancelOfferErrorResponseBody>(response)
    }
