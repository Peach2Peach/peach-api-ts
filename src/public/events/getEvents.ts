import {
  GetEventsErrorResponseBody,
  GetEventsRequestBody,
  GetEventsRequestParams,
  GetEventsRequestQuery,
  GetEventsResponseBody,
} from '../../@types/eventAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetEventsRequestParams & GetEventsRequestQuery & GetEventsRequestBody

export const getEvents
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/events`, {
        headers: helpers.getPublicHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetEventsResponseBody, GetEventsErrorResponseBody>(response)
    }
