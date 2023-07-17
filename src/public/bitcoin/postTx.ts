import {
  PostTxErrorResponseBody,
  PostTxRequestBody,
  PostTxRequestParams,
  PostTxRequestQuery,
  PostTxResponseBody,
} from '../../@types/electrsAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PostTxRequestParams & PostTxRequestQuery & PostTxRequestBody

export const postTx
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ tx, timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/tx`, {
        headers: helpers.getPublicHeaders(url),
        method: 'POST',
        body: JSON.stringify({ tx }),
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<PostTxResponseBody, PostTxErrorResponseBody>(response)
    }
