import {
  PostBuyOfferRequestBody,
  PostOfferErrorResponseBody,
  PostOfferRequestParams,
  PostOfferRequestQuery,
  PostOfferResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & PostOfferRequestParams & PostOfferRequestQuery & PostBuyOfferRequestBody

export const postBuyOffer
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout, type, amount, meansOfPayment, paymentData, releaseAddress, messageSignature }: Props) => {
      const response = await fetch(`${url}/v1/offer`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({ type, amount, meansOfPayment, paymentData, releaseAddress, messageSignature }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<PostOfferResponseBody, PostOfferErrorResponseBody>(response)
    }
