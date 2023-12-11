import {
  PatchOfferErrorResponseBody,
  PatchOfferRequestBody,
  PatchOfferRequestParams,
  PatchOfferRequestQuery,
  PatchOfferResponseBody,
} from '../../@types/api/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PatchOfferRequestParams & PatchOfferRequestQuery & PatchOfferRequestBody

export const patchOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({
    offerId,
    refundAddress,
    releaseAddress,
    messageSignature,
    refundTx,
    premium,
    maxPremium,
    minReputation,
    signal,
  }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'PATCH',
      body: JSON.stringify({
        refundAddress,
        refundTx,
        premium,
        maxPremium,
        minReputation,
        releaseAddress,
        messageSignature,
      }),
      signal,
    })

    return parseResponse<PatchOfferResponseBody, PatchOfferErrorResponseBody>(response)
  }
