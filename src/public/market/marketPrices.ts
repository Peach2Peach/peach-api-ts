import {
  GetPricesErrorResponseBody,
  GetPricesRequestBody,
  GetPricesRequestParams,
  GetPricesRequestQuery,
  GetPricesResponseBody,
} from '../../@types/marketAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetPricesRequestParams & GetPricesRequestQuery & GetPricesRequestBody

export const marketPrices =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ timeout }: Props) => {
    const response = await fetch(`${url}/v1/market/prices`, {
      headers: helpers.getPublicHeaders(url),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })
    return parseResponse<GetPricesResponseBody, GetPricesErrorResponseBody>(response)
  }
