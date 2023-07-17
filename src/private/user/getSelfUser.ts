import {
  GetSelfUserErrorResponseBody,
  GetSelfUserRequestBody,
  GetSelfUserRequestParams,
  GetSelfUserRequestQuery,
  GetSelfUserResponseBody,
} from '../../@types/userAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetSelfUserRequestParams & GetSelfUserRequestQuery & GetSelfUserRequestBody

export const getSelfUser
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/me`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetSelfUserResponseBody, GetSelfUserErrorResponseBody>(response)
    }
