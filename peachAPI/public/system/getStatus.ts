import {
  GetStatusErrorResponseBody,
  GetStatusRequestBody,
  GetStatusRequestParams,
  GetStatusRequestQuery,
  GetStatusResponseBody,
} from '../../../@types/systemAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPublicHeaders } from '../getPublicHeaders'

type Props = RequestProps & GetStatusRequestParams & GetStatusRequestQuery & GetStatusRequestBody

export const getStatus
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/system/status`, {
        headers: getPublicHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetStatusResponseBody, GetStatusErrorResponseBody>(response)
    }
