import {
  GetUserErrorResponseBody,
  GetUserRequestBody,
  GetUserRequestParams,
  GetUserResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetUserRequestParams & GetUserRequestBody

export const getUser
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ userId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/${userId}`, {
        headers: helpers.getPublicHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetUserResponseBody, GetUserErrorResponseBody>(response)
    }
