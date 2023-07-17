import {
  LogoutUserErrorResponseBody,
  LogoutUserRequestBody,
  LogoutUserRequestParams,
  LogoutUserRequestQuery,
  LogoutUserResponseBody,
} from '../../@types/userAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { getPeachAccount } from '../../peachAccount'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & LogoutUserRequestParams & LogoutUserRequestQuery & LogoutUserRequestBody

export const logoutUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ timeout }: Props) => {
    const peachAccount = getPeachAccount()
    if (!peachAccount) return [null, { error: 'UNAUTHORIZED' }]

    const response = await fetch(`${url}/v1/user/logout`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'PATCH',
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<LogoutUserResponseBody, LogoutUserErrorResponseBody>(response)
  }
