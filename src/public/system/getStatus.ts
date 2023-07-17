import {
  GetStatusErrorResponseBody,
  GetStatusRequestBody,
  GetStatusRequestParams,
  GetStatusRequestQuery,
  GetStatusResponseBody,
} from '../../@types/systemAPI'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, PublicPeachAPIHelpers, RequestProps } from '../../types'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'

type Props = RequestProps & GetStatusRequestParams & GetStatusRequestQuery & GetStatusRequestBody

export const getStatus
  = ({ url }: PeachAPIOptions, helpers: PublicPeachAPIHelpers) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/system/status`, {
        headers: helpers.getPublicHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetStatusResponseBody, GetStatusErrorResponseBody>(response)
    }
