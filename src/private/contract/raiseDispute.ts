import {
  RaiseDisputeErrorResponseBody,
  RaiseDisputeRequestBody,
  RaiseDisputeRequestParams,
  RaiseDisputeRequestQuery,
  RaiseDisputeResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & RaiseDisputeRequestParams & RaiseDisputeRequestQuery & RaiseDisputeRequestBody

export const raiseDispute =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, email, reason, message, symmetricKeyEncrypted, timeout }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/dispute`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        email,
        reason,
        message,
        symmetricKeyEncrypted,
      }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<RaiseDisputeResponseBody, RaiseDisputeErrorResponseBody>(response)
  }
