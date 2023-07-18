import {
  UpdateUserErrorResponseBody,
  UpdateUserRequestBody,
  UpdateUserRequestParams,
  UpdateUserRequestQuery,
  UpdateUserResponseBody,
} from '../../@types/userAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & UpdateUserRequestParams & UpdateUserRequestQuery & UpdateUserRequestBody

export const updateUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ pgpPublicKey, signature, message, pgpSignature, fcmToken, referralCode, feeRate, timeout }: Props) => {
    const response = await fetch(`${url}/v1/user`, {
      headers: helpers.getPrivateHeaders(url),
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
