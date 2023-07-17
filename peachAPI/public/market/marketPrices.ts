import {
  GetPricesErrorResponseBody,
  GetPricesRequestBody,
  GetPricesRequestParams,
  GetPricesRequestQuery,
  GetPricesResponseBody,
} from '../../../@types/marketAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPublicHeaders } from '../getPublicHeaders'

type Props = RequestProps & GetPricesRequestParams & GetPricesRequestQuery & GetPricesRequestBody

export const marketPrices
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/market/prices`, {
        headers: getPublicHeaders(url),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })
      return parseResponse<GetPricesResponseBody, GetPricesErrorResponseBody>(response)
    }
