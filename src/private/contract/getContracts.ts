import {
  GetContractsErrorResponseBody,
  GetContractsRequestBody,
  GetContractsRequestParams,
  GetContractsRequestQuery,
  GetContractsResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetContractsRequestParams & GetContractsRequestQuery & GetContractsRequestBody

export const getContracts =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ timeout, abortSignal }: Props) => {
    const response = await fetch(`${url}/v1/contracts`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'GET',
      signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
    })

    return parseResponse<GetContractsResponseBody, GetContractsErrorResponseBody>(response)
  }
