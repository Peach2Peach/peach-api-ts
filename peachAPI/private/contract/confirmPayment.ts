import {
  ConfirmPaymentErrorResponseBody,
  ConfirmPaymentRequestBody,
  ConfirmPaymentRequestParams,
  ConfirmPaymentRequestQuery,
  ConfirmPaymentResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & ConfirmPaymentRequestParams & ConfirmPaymentRequestQuery & ConfirmPaymentRequestBody

export const confirmPayment
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, releaseTransaction, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/payment/confirm`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          releaseTransaction,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<ConfirmPaymentResponseBody, ConfirmPaymentErrorResponseBody>(response)
    }
