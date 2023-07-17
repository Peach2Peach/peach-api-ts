import {
  GetInfoErrorResponseBody,
  GetInfoRequestBody,
  GetInfoRequestParams,
  GetInfoRequestQuery,
  GetInfoResponseBody,
} from '../../../@types/systemAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetInfoRequestParams & GetInfoRequestQuery & GetInfoRequestBody

export const getInfo
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/info`, {
        headers: {
          ...helpers.getPublicHeaders(url),
          'Cache-Control': 'no-cache',
        },
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetInfoResponseBody, GetInfoErrorResponseBody>(response)
    }
