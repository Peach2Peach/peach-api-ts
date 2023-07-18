import {
  GetContractSummariesErrorResponseBody,
  GetContractSummariesRequestBody,
  GetContractSummariesRequestParams,
  GetContractSummariesRequestQuery,
  GetContractSummariesResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  GetContractSummariesRequestParams &
  GetContractSummariesRequestQuery &
  GetContractSummariesRequestBody

export const getContractSummaries =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ timeout, abortSignal }: Props) => {
    const response = await fetch(`${url}/v1/contracts/summary`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'GET',
      signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
    })

    return parseResponse<GetContractSummariesResponseBody, GetContractSummariesErrorResponseBody>(response)
  }
