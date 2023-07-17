import {
  RejectCancelationRequestErrorResponseBody,
  RejectCancelationRequestRequestBody,
  RejectCancelationRequestRequestParams,
  RejectCancelationRequestRequestQuery,
  RejectCancelationRequestResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps &
  RejectCancelationRequestRequestParams &
  RejectCancelationRequestRequestQuery &
  RejectCancelationRequestRequestBody

export const rejectContractCancelation
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/cancel/reject`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<RejectCancelationRequestResponseBody, RejectCancelationRequestErrorResponseBody>(response)
    }
