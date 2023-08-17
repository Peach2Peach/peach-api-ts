import {
  GetContractsErrorResponseBody,
  GetContractsRequestBody,
  GetContractsRequestParams,
  GetContractsRequestQuery,
  GetContractsResponseBody,
} from '../../@types/api/contractAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetContractsRequestParams & GetContractsRequestQuery & GetContractsRequestBody

export const getContracts
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ signal }: Props = {}) => {
      const response = await fetch(`${url}/v1/contracts`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal,
      })

      return parseResponse<GetContractsResponseBody, GetContractsErrorResponseBody>(response)
    }
