import { APIError } from '../global'
import { PaymentMethodInfo } from '../payment'

export type GetInfoRequestParams = {}
export type GetInfoRequestQuery = {}
export type GetInfoRequestBody = {}
export type GetInfoResponseBody = {
  peach: { pgpPublicKey: string }
  fees: { escrow: number }
  paymentMethods: PaymentMethodInfo[]
  minAppVersion: string
  latestAppVersion: string
}
export type GetInfoErrorResponseBody = APIError<null>

export type GetPaymentMethodInfoRequestParams = {}
export type GetPaymentMethodInfoRequestQuery = {}
export type GetPaymentMethodInfoRequestBody = {}
export type GetPaymentMethodInfoResponseBody = PaymentMethodInfo[]
export type GetPaymentMethodInfoErrorResponseBody = APIError<null>

export type GetStatusRequestParams = {}
export type GetStatusRequestQuery = {}
export type GetStatusRequestBody = {}
export type GetStatusResponseBody = {
  error: null
  status: 'online'
  serverTime: number
}
export type GetStatusErrorResponseBody = APIError<null>
