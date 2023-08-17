import {
  GetContractSummariesErrorResponseBody,
  GetContractSummariesRequestBody,
  GetContractSummariesRequestParams,
  GetContractSummariesRequestQuery,
  GetContractSummariesResponseBody,
} from '../../@types/api/contractAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  GetContractSummariesRequestParams &
  GetContractSummariesRequestQuery &
  GetContractSummariesRequestBody

export const getContractSummaries =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/contracts/summary`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'GET',
      signal,
    })

    return parseResponse<GetContractSummariesResponseBody, GetContractSummariesErrorResponseBody>(response)
  }
