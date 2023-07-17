import {
  GetInfoErrorResponseBody,
  GetInfoRequestBody,
  GetInfoRequestParams,
  GetInfoRequestQuery,
  GetInfoResponseBody,
} from '../../../@types/systemAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPublicHeaders } from '../getPublicHeaders'

type Props = RequestProps & GetInfoRequestParams & GetInfoRequestQuery & GetInfoRequestBody

export const getInfo
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/info`, {
        headers: {
          ...getPublicHeaders(url),
          'Cache-Control': 'no-cache',
        },
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetInfoResponseBody, GetInfoErrorResponseBody>(response)
    }
