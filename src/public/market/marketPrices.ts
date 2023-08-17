import {
  GetPricesErrorResponseBody,
  GetPricesRequestBody,
  GetPricesRequestParams,
  GetPricesRequestQuery,
  GetPricesResponseBody,
} from '../../@types/api/marketAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetPricesRequestParams & GetPricesRequestQuery & GetPricesRequestBody

export const marketPrices =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/market/prices`, {
      headers: helpers.getPublicHeaders(url),
      signal,
    })
    return parseResponse<GetPricesResponseBody, GetPricesErrorResponseBody>(response)
  }
