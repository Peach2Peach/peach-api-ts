import { APIError } from '../global'
export type AddPSBTRequestParams = {}
export type AddPSBTRequestQuery = {}
export type AddPSBTRequestBody = { psbt: string; feeRate: number; index?: number }
export type AddPSBTResponseBody = { id: string; revocationToken: string }
export type AddPSBTErrorResponseBody = APIError<null>

export type RevokePSBTRequestParams = {}
export type RevokePSBTRequestQuery = {}
export type RevokePSBTRequestBody = { id: string; revocationToken: string }
export type RevokePSBTResponseBody = { success: boolean }
export type RevokePSBTErrorResponseBody = APIError<null>
