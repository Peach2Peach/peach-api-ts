import {
  ConfirmCancelationRequestErrorResponseBody,
  ConfirmCancelationRequestRequestBody,
  ConfirmCancelationRequestRequestParams,
  ConfirmCancelationRequestRequestQuery,
  ConfirmCancelationRequestResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  ConfirmCancelationRequestRequestParams &
  ConfirmCancelationRequestRequestQuery &
  ConfirmCancelationRequestRequestBody

export const confirmContractCancelation =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, timeout }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/cancel/confirm`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<ConfirmCancelationRequestResponseBody, ConfirmCancelationRequestErrorResponseBody>(response)
  }
