import {
  GetStatusErrorResponseBody,
  GetStatusRequestBody,
  GetStatusRequestParams,
  GetStatusRequestQuery,
  GetStatusResponseBody,
} from '../../../@types/systemAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetStatusRequestParams & GetStatusRequestQuery & GetStatusRequestBody

export const getStatus
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/system/status`, {
        headers: helpers.getPublicHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetStatusResponseBody, GetStatusErrorResponseBody>(response)
    }
