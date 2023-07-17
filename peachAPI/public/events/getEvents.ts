import {
  GetEventsErrorResponseBody,
  GetEventsRequestBody,
  GetEventsRequestParams,
  GetEventsRequestQuery,
  GetEventsResponseBody,
} from '../../../@types/eventAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPublicHeaders } from '../getPublicHeaders'

type Props = RequestProps & GetEventsRequestParams & GetEventsRequestQuery & GetEventsRequestBody

export const getEvents
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/events`, {
        headers: {
          ...getPublicHeaders(url),
          'Cache-Control': 'no-cache',
        },
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetEventsResponseBody, GetEventsErrorResponseBody>(response)
    }
