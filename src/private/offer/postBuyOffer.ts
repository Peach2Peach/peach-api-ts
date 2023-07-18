import {
  PostBuyOfferRequestBody,
  PostOfferErrorResponseBody,
  PostOfferRequestParams,
  PostOfferRequestQuery,
  PostOfferResponseBody,
} from '../../@types/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PostOfferRequestParams & PostOfferRequestQuery & PostBuyOfferRequestBody

export const postBuyOffer
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ type, amount, meansOfPayment, paymentData, releaseAddress, messageSignature, signal }: Props) => {
      const response = await fetch(`${url}/v1/offer`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({ type, amount, meansOfPayment, paymentData, releaseAddress, messageSignature }),
        signal,
      })

      return parseResponse<PostOfferResponseBody, PostOfferErrorResponseBody>(response)
    }
