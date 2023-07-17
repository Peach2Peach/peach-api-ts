import { PeachAPIOptions, RequestProps } from '../../types'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { getPrivateHeaders } from '../getPrivateHeaders'
import {
  PostChatErrorResponseBody,
  PostChatRequestBody,
  PostChatRequestParams,
  PostChatRequestQuery,
  PostChatResponseBody,
} from '../../../@types/contractAPI'

type Props = RequestProps & PostChatRequestParams & PostChatRequestQuery & PostChatRequestBody

export const postChat
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, message, signature, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/chat`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          message,
          signature,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<PostChatResponseBody, PostChatErrorResponseBody>(response)
    }
