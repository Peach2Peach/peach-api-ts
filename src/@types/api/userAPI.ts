import { APIError, APISuccess, AccessToken } from '../global'
import { PaymentMethod } from '../payment'
import { FeeRate, PublicUser, Rating, TradingLimit, User } from '../user'

export type AuthenticateRequestParams = {}
export type AuthenticateRequestQuery = {}
export type AuthenticateRequestBody = {
  publicKey: string
  message: string
  signature: string
  uniqueId?: string
}
export type AuthenticateResponseBody = AccessToken
export type AuthenticateErrorResponseBody = APIError<'INVALID_SIGNATURE' | 'AUTHENTICATION_FAILURE' | 'NOT_FOUND'>

export type RegisterRequestParams = {}
export type RegisterRequestQuery = {}
export type RegisterRequestBody = {
  publicKey: string
  message: string
  signature: string
  uniqueId: string
}
export type RegisterResponseBody = AccessToken & { restored: boolean }
export type RegisterErrorResponseBody = APIError<
  'INVALID_SIGNATURE' | 'AUTHENTICATION_FAILURE' | 'USER_EXISTS' | 'ACCOUNT_BANNED'
>

export type GetTradingLimitRequestParams = {}
export type GetTradingLimitRequestQuery = {}
export type GetTradingLimitRequestBody = {}
export type GetTradingLimitResponseBody = TradingLimit
export type GetTradingLimitErrorResponseBody = APIError<null>

export type ErrorResponseBody = APIError<'INVALID_SIGNATURE' | 'AUTHENTICATION_FAILURE' | 'INVALID_PGP_SIGNATURE'>

export type GetUserRequestParams = { userId: string }
export type GetUserRequestQuery = {}
export type GetUserRequestBody = {}
export type GetUserResponseBody = PublicUser
export type GetUserErrorResponseBody = APIError<null>

export type GetUserStatusRequestParams = { userId: string }
export type GetUserStatusRequestQuery = {}
export type GetUserStatusRequestBody = {}
export type GetUserStatusResponseBody = { isBlocked: boolean; trades: number; badExperience: boolean }
export type GetUserStatusErrorResponseBody = APIError<null>

export type BlockUserRequestParams = { userId: string }
export type BlockUserRequestQuery = {}
export type BlockUserRequestBody = {}
export type BlockUserResponseBody = APISuccess
export type BlockUserErrorResponseBody = APIError<null>

export type UnblockUserRequestParams = { userId: string }
export type UnblockUserRequestQuery = {}
export type UnblockUserRequestBody = {}
export type UnblockUserResponseBody = APISuccess
export type UnblockUserErrorResponseBody = APIError<null>

export type GetSelfUserRequestParams = {}
export type GetSelfUserRequestQuery = {}
export type GetSelfUserRequestBody = {}
export type GetSelfUserResponseBody = User
export type GetSelfUserErrorResponseBody = APIError<null>

export type GetUserPaymentMethodInfoRequestParams = {}
export type GetUserPaymentMethodInfoRequestQuery = {}
export type GetUserPaymentMethodInfoRequestBody = {}
export type GetUserPaymentMethodInfoResponseBody = {
  forbidden: {
    buy: PaymentMethod[]
    sell: PaymentMethod[]
  }
}
export type GetUserPaymentMethodInfoErrorResponseBody = APIError<null>

export type UnlinkPaymentHashRequestParams = {}
export type UnlinkPaymentHashRequestQuery = {}
export type UnlinkPaymentHashRequestBody = { hashes: string[] }
export type UnlinkPaymentHashResponseBody = APISuccess
export type UnlinkPaymentHashErrorResponseBody = APIError<null>

export type CheckReferralCodeRequestParams = {}
export type CheckReferralCodeRequestQuery = { code: string }
export type CheckReferralCodeRequestBody = {}
export type CheckReferralCodeResponseBody = { valid: boolean }
export type CheckReferralCodeErrorResponseBody = APIError<null>

export type GetUserRatingsRequestParams = { userId: string }
export type GetUserRatingsRequestQuery = {}
export type GetUserRatingsRequestBody = {}
export type GetUserRatingsResponseBody = Rating[]
export type GetUserRatingsErrorResponseBody = APIError<null>

export type UpdateUserRequestParams = {}
export type UpdateUserRequestQuery = {}
export type UpdateUserRequestBody = {
  pgpPublicKey?: string
  signature?: string
  message?: string
  pgpSignature?: string
  fcmToken?: string
  referralCode?: string
  feeRate?: FeeRate
  feeRateLiquid?: FeeRate
}
export type UpdateUserResponseBody = APISuccess
export type UpdateUserErrorResponseBody = APIError<
  'INVALID_SIGNATURE' | 'AUTHENTICATION_FAILURE' | 'INVALID_PGP_SIGNATURE'
>

export type EnableBatchingRequestParams = {}
export type EnableBatchingRequestQuery = {}
export type EnableBatchingRequestBody = { enableBatching: boolean, riskAcknowledged: boolean }
export type EnableBatchingResponseBody = APISuccess
export type EnableBatchingErrorResponseBody = APIError<null>

export type LogoutUserRequestParams = {}
export type LogoutUserRequestQuery = {}
export type LogoutUserRequestBody = {}
export type LogoutUserResponseBody = APISuccess
export type LogoutUserErrorResponseBody = APIError<null>

export type RedeemReferralCodeRequestParams = {}
export type RedeemReferralCodeRequestQuery = {}
export type RedeemReferralCodeRequestBody = { code: string }
export type RedeemReferralCodeResponseBody = APISuccess & { bonusPoints: User['bonusPoints'] }
export type RedeemReferralCodeErrorResponseBody = APIError<'ALREADY_TAKEN' | 'NOT_ENOUGH_POINTS'>

export type RedeemTradesRequestParams = {}
export type RedeemTradesRequestQuery = {}
export type RedeemTradesRequestBody = {}
export type RedeemTradesResponseBody = APISuccess & { bonusPoints: User['bonusPoints'] }
export type RedeemTradesErrorResponseBody = APIError<'NOT_ENOUGH_POINTS'>
