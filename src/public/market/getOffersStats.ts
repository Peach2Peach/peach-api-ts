import { APIError } from '../../@types/global'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type GetRealTimeOfferDataResponseBody = {
  buy: {
    open: number
  }
  sell: {
    open: number
    avgPremium: number
  }
}
type GetRealTimeOfferDataErrorResponseBody = APIError<null>

export const getOffersStats =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: RequestProps = {}) => {
    const response = await fetch(`${url}/v1/market/offers/stats`, {
      headers: helpers.getPublicHeaders(url),
      signal,
    })
    return parseResponse<GetRealTimeOfferDataResponseBody, GetRealTimeOfferDataErrorResponseBody>(response)
  }
