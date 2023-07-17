import {
  AuthenticateErrorResponseBody,
  AuthenticateRequestBody,
  AuthenticateRequestParams,
  AuthenticateRequestQuery,
  AuthenticateResponseBody,
} from '../../@types/userAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, PublicPeachAPIHelpers, RequestProps } from '../../types'

type Props = RequestProps & AuthenticateRequestParams & AuthenticateRequestQuery & AuthenticateRequestBody

export const auth
  = ({ url }: PeachAPIOptions, helpers: PublicPeachAPIHelpers) =>
    async ({ publicKey, message, signature, uniqueId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/auth/`, {
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
      return parseResponse<AuthenticateResponseBody, AuthenticateErrorResponseBody>(response)
    }
