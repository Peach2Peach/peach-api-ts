import {
  PostOfferErrorResponseBody,
  PostOfferRequestParams,
  PostOfferRequestQuery,
  PostOfferResponseBody,
  PostSellOfferRequestBody,
} from '../../@types/api/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PostOfferRequestParams & PostOfferRequestQuery & PostSellOfferRequestBody

export const postSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ type, meansOfPayment, paymentData, amount, premium, returnAddress, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({ type, meansOfPayment, paymentData, amount, premium, returnAddress }),
      signal,
    })

    return parseResponse<PostOfferResponseBody, PostOfferErrorResponseBody>(response)
  }
