import { SendReportErrorResponseBody, SendReportResponseBody } from '../../@types/api/contactAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & {
  email: string
  reason: string
  topic: string
  message: string
}

export const sendReport =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ email, reason, topic, message, signal }: Props) => {
    const response = await fetch(`${url}/v1/contact/report`, {
      headers: helpers.getPublicHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        email,
        reason,
        topic,
        message,
      }),
      signal,
    })

    return parseResponse<SendReportResponseBody, SendReportErrorResponseBody>(response)
  }
