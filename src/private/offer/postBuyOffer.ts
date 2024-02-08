import {
  PostBuyOfferRequestBody,
  PostOfferErrorResponseBody,
  PostOfferRequestParams,
  PostOfferRequestQuery,
} from '../../@types/api/offerAPI'
import { BuyOffer } from '../../@types/offer'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PostOfferRequestParams & PostOfferRequestQuery & PostBuyOfferRequestBody

export const postBuyOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    type,
    escrowType,
    amount,
    meansOfPayment,
    paymentData,
    releaseAddress,
    maxPremium,
    minReputation,
    messageSignature,
    signal,
  }: Props) => {
    const response = await fetch(`${url}/v1/offer`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        type,
        escrowType,
        amount,
        meansOfPayment,
        paymentData,
        releaseAddress,
        maxPremium,
        minReputation,
        messageSignature,
      }),
      signal,
    })

    return parseResponse<BuyOffer, PostOfferErrorResponseBody>(response)
  }
