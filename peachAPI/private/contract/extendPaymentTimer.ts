import {
  ExtendPaymentTimerErrorResponseBody,
  ExtendPaymentTimerRequestBody,
  ExtendPaymentTimerRequestParams,
  ExtendPaymentTimerRequestQuery,
  ExtendPaymentTimerResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps &
  ExtendPaymentTimerRequestParams &
  ExtendPaymentTimerRequestQuery &
  ExtendPaymentTimerRequestBody

export const extendPaymentTimer
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/extendTime`, {
        headers: await getPrivateHeaders(url),
        method: 'PATCH',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<ExtendPaymentTimerResponseBody, ExtendPaymentTimerErrorResponseBody>(response)
    }
