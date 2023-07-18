import {
  CancelOfferErrorResponseBody,
  CancelOfferRequestBody,
  CancelOfferRequestParams,
  CancelOfferRequestQuery,
  CancelOfferResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & CancelOfferRequestParams & CancelOfferRequestQuery & CancelOfferRequestBody

export const cancelOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, satsPerByte, timeout }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/cancel`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({ satsPerByte }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<CancelOfferResponseBody, CancelOfferErrorResponseBody>(response)
  }
