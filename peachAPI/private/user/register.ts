import {
  RegisterErrorResponseBody,
  RegisterRequestBody,
  RegisterRequestParams,
  RegisterRequestQuery,
  RegisterResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & RegisterRequestParams & RegisterRequestQuery & RegisterRequestBody

export const register
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ publicKey, message, signature, uniqueId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/register`, {
        headers: helpers.getPublicHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          publicKey,
          uniqueId,
          message,
          signature,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })
      return parseResponse<RegisterResponseBody, RegisterErrorResponseBody>(response)
    }
