import {
  GetUserErrorResponseBody,
  GetUserRequestBody,
  GetUserRequestParams,
  GetUserResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPublicHeaders } from '../getPublicHeaders'

type Props = RequestProps & GetUserRequestParams & GetUserRequestBody

export const getUser
  = ({ url }: PeachAPIOptions) =>
    async ({ userId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/${userId}`, {
        headers: getPublicHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetUserResponseBody, GetUserErrorResponseBody>(response)
    }
