import { BitcoinEvent } from './events'
import { APIError } from './global'

export type GetEventsRequestParams = {}
export type GetEventsRequestQuery = {}
export type GetEventsRequestBody = {}
export type GetEventsResponseBody = BitcoinEvent[]
export type GetEventsErrorResponseBody = APIError<null>
