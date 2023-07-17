import {
  GetContractErrorResponseBody,
  GetContractRequestBody,
  GetContractRequestParams,
  GetContractRequestQuery,
  GetContractResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & GetContractRequestParams & GetContractRequestQuery & GetContractRequestBody

export const getContract
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetContractResponseBody, GetContractErrorResponseBody>(response)
    }
