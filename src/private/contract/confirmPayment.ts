import {
  ConfirmPaymentErrorResponseBody,
  ConfirmPaymentRequestBody,
  ConfirmPaymentRequestParams,
  ConfirmPaymentRequestQuery,
  ConfirmPaymentResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & ConfirmPaymentRequestParams & ConfirmPaymentRequestQuery & ConfirmPaymentRequestBody

export const confirmPayment =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, releaseTransaction, timeout }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/payment/confirm`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        releaseTransaction,
      }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<ConfirmPaymentResponseBody, ConfirmPaymentErrorResponseBody>(response)
  }
