import {
  RefundSellOfferErrorResponseBody,
  RefundSellOfferRequestBody,
  RefundSellOfferRequestParams,
  RefundSellOfferRequestQuery,
  RefundSellOfferResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & RefundSellOfferRequestParams & RefundSellOfferRequestQuery & RefundSellOfferRequestBody

export const refundSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, tx, timeout }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/refund`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        tx,
      }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<RefundSellOfferResponseBody, RefundSellOfferErrorResponseBody>(response)
  }
