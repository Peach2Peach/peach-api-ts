import {
  UpdateUserErrorResponseBody,
  UpdateUserRequestBody,
  UpdateUserRequestParams,
  UpdateUserRequestQuery,
  UpdateUserResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & UpdateUserRequestParams & UpdateUserRequestQuery & UpdateUserRequestBody

export const updateUser
  = ({ url }: PeachAPIOptions) =>
    async ({ pgpPublicKey, signature, message, pgpSignature, fcmToken, referralCode, feeRate, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user`, {
        headers: await getPrivateHeaders(url),
        method: 'PATCH',
        body: JSON.stringify({
          pgpPublicKey,
          signature,
          message,
          pgpSignature,
          fcmToken,
          referralCode,
          feeRate,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<UpdateUserResponseBody, UpdateUserErrorResponseBody>(response)
    }
