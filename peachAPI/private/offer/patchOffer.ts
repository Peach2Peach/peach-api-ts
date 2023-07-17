import {
  PatchOfferErrorResponseBody,
  PatchOfferRequestBody,
  PatchOfferRequestParams,
  PatchOfferRequestQuery,
  PatchOfferResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & PatchOfferRequestParams & PatchOfferRequestQuery & PatchOfferRequestBody

export const patchOffer
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, refundAddress, refundTx, premium, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}`, {
        headers: await getPrivateHeaders(url),
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
