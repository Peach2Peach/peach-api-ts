import {
  GetContractSummariesErrorResponseBody,
  GetContractSummariesRequestBody,
  GetContractSummariesRequestParams,
  GetContractSummariesRequestQuery,
  GetContractSummariesResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps &
  GetContractSummariesRequestParams &
  GetContractSummariesRequestQuery &
  GetContractSummariesRequestBody

export const getContractSummaries
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/contracts/summary`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetContractSummariesResponseBody, GetContractSummariesErrorResponseBody>(response)
    }
