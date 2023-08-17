import {
  RejectCancelationRequestErrorResponseBody,
  RejectCancelationRequestRequestBody,
  RejectCancelationRequestRequestParams,
  RejectCancelationRequestRequestQuery,
  RejectCancelationRequestResponseBody,
} from '../../@types/api/contractAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  RejectCancelationRequestRequestParams &
  RejectCancelationRequestRequestQuery &
  RejectCancelationRequestRequestBody

export const rejectContractCancelation =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, signal }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/cancel/reject`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      signal,
    })

    return parseResponse<RejectCancelationRequestResponseBody, RejectCancelationRequestErrorResponseBody>(response)
  }
