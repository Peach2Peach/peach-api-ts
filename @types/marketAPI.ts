import { APIError, Pricebook } from './global'
import { PriceData, TradingPair } from './market'

export type GetPriceRequestParams = { pair: TradingPair }
export type GetPriceRequestQuery = {}
export type GetPriceRequestBody = {}
export type GetPriceResponseBody = PriceData
export type GetPriceErrorResponseBody = APIError<null>

export type GetPricesRequestParams = {}
export type GetPricesRequestQuery = {}
export type GetPricesRequestBody = {}
export type GetPricesResponseBody = Pricebook
export type GetPricesErrorResponseBody = APIError<null>
