import {
  GetPriceErrorResponseBody,
  GetPriceRequestBody,
  GetPriceRequestParams,
  GetPriceRequestQuery,
  GetPriceResponseBody,
} from '../../@types/marketAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetPriceRequestParams & GetPriceRequestQuery & GetPriceRequestBody

export const marketPrice =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ pair, timeout }: Props) => {
    const response = await fetch(`${url}/v1/market/price/${pair}`, {
      headers: helpers.getPublicHeaders(url),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })
    return parseResponse<GetPriceResponseBody, GetPriceErrorResponseBody>(response)
  }
