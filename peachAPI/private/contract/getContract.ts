import {
  GetContractErrorResponseBody,
  GetContractRequestBody,
  GetContractRequestParams,
  GetContractRequestQuery,
  GetContractResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetContractRequestParams & GetContractRequestQuery & GetContractRequestBody

export const getContract
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ contractId, timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetContractResponseBody, GetContractErrorResponseBody>(response)
    }
