import {
  ExtendPaymentTimerErrorResponseBody,
  ExtendPaymentTimerRequestBody,
  ExtendPaymentTimerRequestParams,
  ExtendPaymentTimerRequestQuery,
  ExtendPaymentTimerResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  ExtendPaymentTimerRequestParams &
  ExtendPaymentTimerRequestQuery &
  ExtendPaymentTimerRequestBody

export const extendPaymentTimer
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ contractId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/extendTime`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'PATCH',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<ExtendPaymentTimerResponseBody, ExtendPaymentTimerErrorResponseBody>(response)
    }
