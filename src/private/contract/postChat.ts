import {
  PostChatErrorResponseBody,
  PostChatRequestBody,
  PostChatRequestParams,
  PostChatRequestQuery,
  PostChatResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PostChatRequestParams & PostChatRequestQuery & PostChatRequestBody

export const postChat =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, message, signature, timeout }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/chat`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        message,
        signature,
      }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<PostChatResponseBody, PostChatErrorResponseBody>(response)
  }
