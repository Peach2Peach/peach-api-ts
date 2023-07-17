import { APIError } from '../../../@types/global'
import {
  RegisterRequestBody,
  RegisterRequestParams,
  RegisterRequestQuery,
  RegisterResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { setAccessToken } from '../../accessToken'
import { getResponseError } from '../../getResponseError'
import { getPublicHeaders } from '../../public/getPublicHeaders'
import { PeachAPIOptions, RequestProps } from '../../types'
import { TOKENNOTFOUNDERROR } from './constants'

type Props = RequestProps & RegisterRequestParams & RegisterRequestQuery & RegisterRequestBody

export const register
  = ({ url }: PeachAPIOptions) =>
    async ({
      publicKey,
      message,
      signature,
      uniqueId,
      timeout,
    }: Props): Promise<[RegisterResponseBody | null, APIError<string> | null]> => {
      try {
        const response = await fetch(`${url}/v1/user/register/`, {
          headers: getPublicHeaders(url),
          method: 'POST',
          body: JSON.stringify({
            publicKey,
            message,
            signature,
            uniqueId,
          }),
          signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
        })
        const responseError = getResponseError(response)
        if (responseError) return [null, { error: responseError }]

        const result = response?.json ? ((await response.json()) as RegisterResponseBody | APIError<string>) : null

        if (result && 'accessToken' in result) {
          setAccessToken(result)
          return [result, null]
        } else if (result) {
          return [null, result as APIError<string>]
        }

        return [null, TOKENNOTFOUNDERROR]
      } catch (e) {
        return [null, { error: 'INTERNAL_SERVER_ERROR' }]
      }
    }
