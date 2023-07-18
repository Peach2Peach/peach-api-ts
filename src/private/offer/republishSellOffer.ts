import {
  RepublishSellOfferErrorResponseBody,
  RepublishSellOfferRequestBody,
  RepublishSellOfferRequestParams,
  RepublishSellOfferRequestQuery,
  RepublishSellOfferResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  RepublishSellOfferRequestParams &
  RepublishSellOfferRequestQuery &
  RepublishSellOfferRequestBody

export const republishSellOffer =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, timeout }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/revive`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<RepublishSellOfferResponseBody, RepublishSellOfferErrorResponseBody>(response)
  }
