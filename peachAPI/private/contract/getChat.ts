import { PeachAPIOptions, RequestProps } from '../../types'

import {
  GetChatErrorResponseBody,
  GetChatRequestBody,
  GetChatRequestParams,
  GetChatRequestQuery,
  GetChatResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & GetChatRequestParams & GetChatRequestQuery & GetChatRequestBody

export const getChat
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, page = '0', timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/chat?page=${page}`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetChatResponseBody, GetChatErrorResponseBody>(response)
    }
