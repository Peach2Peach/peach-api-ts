import {
  PatchOfferErrorResponseBody,
  PatchOfferRequestBody,
  PatchOfferRequestParams,
  PatchOfferRequestQuery,
  PatchOfferResponseBody,
} from '../../@types/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PatchOfferRequestParams & PatchOfferRequestQuery & PatchOfferRequestBody

export const patchOffer
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ offerId, refundAddress, refundTx, premium, maxPremium, signal }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'PATCH',
        body: JSON.stringify({
          refundAddress,
          refundTx,
          premium,
          maxPremium,
        }),
        signal,
      })

      return parseResponse<PatchOfferResponseBody, PatchOfferErrorResponseBody>(response)
    }
