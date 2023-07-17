import {
  CancelContractErrorResponseBody,
  CancelContractRequestBody,
  CancelContractRequestParams,
  CancelContractRequestQuery,
  CancelContractResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & CancelContractRequestParams & CancelContractRequestQuery & CancelContractRequestBody

export const cancelContract
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, satsPerByte, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/cancel`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          satsPerByte,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<CancelContractResponseBody, CancelContractErrorResponseBody>(response)
    }
