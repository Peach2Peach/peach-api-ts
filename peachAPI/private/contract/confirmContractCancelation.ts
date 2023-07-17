import {
  ConfirmCancelationRequestErrorResponseBody,
  ConfirmCancelationRequestRequestBody,
  ConfirmCancelationRequestRequestParams,
  ConfirmCancelationRequestRequestQuery,
  ConfirmCancelationRequestResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps &
  ConfirmCancelationRequestRequestParams &
  ConfirmCancelationRequestRequestQuery &
  ConfirmCancelationRequestRequestBody

export const confirmContractCancelation
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/cancel/confirm`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<ConfirmCancelationRequestResponseBody, ConfirmCancelationRequestErrorResponseBody>(response)
    }
