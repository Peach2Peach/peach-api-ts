import {
  ConfirmPaymentErrorResponseBody,
  ConfirmPaymentRequestBody,
  ConfirmPaymentRequestParams,
  ConfirmPaymentRequestQuery,
  ConfirmPaymentResponseBody,
} from '../../@types/api/contractAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & ConfirmPaymentRequestParams & ConfirmPaymentRequestQuery & ConfirmPaymentRequestBody

export const confirmPayment
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ contractId, releaseTransaction, signal }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/payment/confirm`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          releaseTransaction,
        }),
        signal,
      })

      return parseResponse<ConfirmPaymentResponseBody, ConfirmPaymentErrorResponseBody>(response)
    }
