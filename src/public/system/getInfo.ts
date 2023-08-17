import {
  GetInfoErrorResponseBody,
  GetInfoRequestBody,
  GetInfoRequestParams,
  GetInfoRequestQuery,
  GetInfoResponseBody,
} from '../../@types/api/systemAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetInfoRequestParams & GetInfoRequestQuery & GetInfoRequestBody

export const getInfo
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ signal }: Props = {}) => {
      const response = await fetch(`${url}/v1/info`, {
        headers: {
          ...helpers.getPublicHeaders(url),
          'Cache-Control': 'no-cache',
        },
        method: 'GET',
        signal,
      })

      return parseResponse<GetInfoResponseBody, GetInfoErrorResponseBody>(response)
    }
