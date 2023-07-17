import { PeachAPIOptions, RequestProps } from '../../types'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { getPublicHeaders } from '../getPublicHeaders'
import { SendReportErrorResponseBody, SendReportResponseBody } from '../../../@types/contactAPI'

type Props = RequestProps & {
  email: string
  reason: string
  topic: string
  message: string
}

export const sendReport
  = ({ url }: PeachAPIOptions) =>
    async ({ email, reason, topic, message, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contact/report`, {
        headers: getPublicHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          email,
          reason,
          topic,
          message,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<SendReportResponseBody, SendReportErrorResponseBody>(response)
    }
