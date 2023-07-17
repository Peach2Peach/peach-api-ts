import {
  PostOfferErrorResponseBody,
  PostOfferRequestParams,
  PostOfferRequestQuery,
  PostOfferResponseBody,
  PostSellOfferRequestBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PostOfferRequestParams & PostOfferRequestQuery & PostSellOfferRequestBody

export const postSellOffer
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ type, meansOfPayment, paymentData, amount, premium, returnAddress, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({ type, meansOfPayment, paymentData, amount, premium, returnAddress }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<PostOfferResponseBody, PostOfferErrorResponseBody>(response)
    }
