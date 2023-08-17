import {
  PostTxErrorResponseBody,
  PostTxRequestBody,
  PostTxRequestParams,
  PostTxRequestQuery,
  PostTxResponseBody,
} from '../../@types/api/electrsAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & PostTxRequestParams & PostTxRequestQuery & PostTxRequestBody

export const postTx
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ tx, signal }: Props) => {
      const response = await fetch(`${url}/v1/tx`, {
        headers: helpers.getPublicHeaders(url),
        method: 'POST',
        body: JSON.stringify({ tx }),
        signal,
      })

      return parseResponse<PostTxResponseBody, PostTxErrorResponseBody>(response)
    }
