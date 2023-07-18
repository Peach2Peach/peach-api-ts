import {
  CancelContractErrorResponseBody,
  CancelContractRequestBody,
  CancelContractRequestParams,
  CancelContractRequestQuery,
  CancelContractResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & CancelContractRequestParams & CancelContractRequestQuery & CancelContractRequestBody

export const cancelContract =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, satsPerByte, timeout }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/cancel`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        satsPerByte,
      }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<CancelContractResponseBody, CancelContractErrorResponseBody>(response)
  }
