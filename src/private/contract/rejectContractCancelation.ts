import {
  RejectCancelationRequestErrorResponseBody,
  RejectCancelationRequestRequestBody,
  RejectCancelationRequestRequestParams,
  RejectCancelationRequestRequestQuery,
  RejectCancelationRequestResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  RejectCancelationRequestRequestParams &
  RejectCancelationRequestRequestQuery &
  RejectCancelationRequestRequestBody

export const rejectContractCancelation =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, timeout }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/cancel/reject`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<RejectCancelationRequestResponseBody, RejectCancelationRequestErrorResponseBody>(response)
  }
