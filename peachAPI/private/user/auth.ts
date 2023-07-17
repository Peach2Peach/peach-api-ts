import {
  AuthenticateRequestBody,
  AuthenticateRequestParams,
  AuthenticateRequestQuery,
  AuthenticateResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { setAccessToken } from '../../accessToken'
import { getResponseError } from '../../getResponseError'
import { getPublicHeaders } from '../../public/getPublicHeaders'
import { PeachAPIOptions, RequestProps } from '../../types'
import { TOKENNOTFOUNDERROR } from './constants'

type Props = RequestProps & AuthenticateRequestParams & AuthenticateRequestQuery & AuthenticateRequestBody

export const auth
  = ({ url }: PeachAPIOptions) =>
    async ({
      publicKey,
      message,
      signature,
      uniqueId,
      timeout,
    }: Props): Promise<[AuthenticateResponseBody | null, APIError | null]> => {
      const response = await fetch(`${url}/v1/user/auth/`, {
        headers: getPublicHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          publicKey,
          uniqueId,
          message,
          signature,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })
      const responseError = getResponseError(response)
      if (responseError) return [null, { error: responseError }]

      const result = response?.json ? ((await response.json()) as AccessToken | APIError) : null

      if (result && 'accessToken' in result) {
        setAccessToken(result)
        return [result, null]
      } else if (result) {
        return [null, result as APIError]
      }
      return [null, TOKENNOTFOUNDERROR]
    }
