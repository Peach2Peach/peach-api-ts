import {
  RepublishSellOfferErrorResponseBody,
  RepublishSellOfferRequestBody,
  RepublishSellOfferRequestParams,
  RepublishSellOfferRequestQuery,
  RepublishSellOfferResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps &
  RepublishSellOfferRequestParams &
  RepublishSellOfferRequestQuery &
  RepublishSellOfferRequestBody

export const republishSellOffer
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/revive`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<RepublishSellOfferResponseBody, RepublishSellOfferErrorResponseBody>(response)
    }
