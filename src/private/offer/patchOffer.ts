import {
  PatchOfferErrorResponseBody,
  PatchOfferRequestBody,
  PatchOfferRequestParams,
  PatchOfferRequestQuery,
  PatchOfferResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PatchOfferRequestParams & PatchOfferRequestQuery & PatchOfferRequestBody

export const patchOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, refundAddress, refundTx, premium, timeout }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'PATCH',
      body: JSON.stringify({
        refundAddress,
        refundTx,
        premium,
      }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<PatchOfferResponseBody, PatchOfferErrorResponseBody>(response)
  }
