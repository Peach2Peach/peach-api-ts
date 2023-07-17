import {
  PostOfferErrorResponseBody,
  PostOfferRequestParams,
  PostOfferRequestQuery,
  PostOfferResponseBody,
  PostSellOfferRequestBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & PostOfferRequestParams & PostOfferRequestQuery & PostSellOfferRequestBody

export const postSellOffer
  = ({ url }: PeachAPIOptions) =>
    async ({ type, meansOfPayment, paymentData, amount, premium, returnAddress, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({ type, meansOfPayment, paymentData, amount, premium, returnAddress }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<PostOfferResponseBody, PostOfferErrorResponseBody>(response)
    }
