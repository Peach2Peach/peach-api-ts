import {
  PostTxErrorResponseBody,
  PostTxRequestBody,
  PostTxRequestParams,
  PostTxRequestQuery,
  PostTxResponseBody,
} from '../../../@types/electrsAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPublicHeaders } from '../getPublicHeaders'

type Props = RequestProps & PostTxRequestParams & PostTxRequestQuery & PostTxRequestBody

export const postTx
  = ({ url }: PeachAPIOptions) =>
    async ({ tx, timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/tx`, {
        headers: getPublicHeaders(url),
        method: 'POST',
        body: JSON.stringify({ tx }),
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<PostTxResponseBody, PostTxErrorResponseBody>(response)
    }
