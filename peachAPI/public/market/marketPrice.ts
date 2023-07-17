import { PeachAPIOptions, RequestProps } from '../../types'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { getPublicHeaders } from '../getPublicHeaders'
import {
  GetPriceErrorResponseBody,
  GetPriceRequestBody,
  GetPriceRequestParams,
  GetPriceRequestQuery,
  GetPriceResponseBody,
} from '../../../@types/marketAPI'

type Props = RequestProps & GetPriceRequestParams & GetPriceRequestQuery & GetPriceRequestBody

export const marketPrice
  = ({ url }: PeachAPIOptions) =>
    async ({ pair, timeout }: Props) => {
      const response = await fetch(`${url}/v1/market/price/${pair}`, {
        headers: getPublicHeaders(url),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })
      return parseResponse<GetPriceResponseBody, GetPriceErrorResponseBody>(response)
    }
