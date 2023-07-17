import {
  MatchOfferErrorResponseBody,
  MatchOfferRequestBody,
  MatchOfferRequestParams,
  MatchOfferRequestQuery,
  MatchOfferResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & MatchOfferRequestParams & MatchOfferRequestQuery & MatchOfferRequestBody

export const matchOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    currency,
    paymentMethod,
    premium,
    matchingOfferId,
    symmetricKeyEncrypted,
    symmetricKeySignature,
    paymentDataEncrypted,
    paymentDataSignature,
    timeout,
  }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/match`, {
      headers: helpers.getPrivateHeaders(url),
      body: JSON.stringify({
        matchingOfferId,
        currency,
        paymentMethod,
        premium,
        symmetricKeyEncrypted,
        symmetricKeySignature,
        paymentDataEncrypted,
        paymentDataSignature,
      }),
      method: 'POST',
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<MatchOfferResponseBody, MatchOfferErrorResponseBody>(response)
  }
