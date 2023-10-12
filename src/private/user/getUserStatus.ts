import {
  GetUserStatusErrorResponseBody,
  GetUserStatusRequestBody,
  GetUserStatusRequestParams,
  GetUserStatusRequestQuery,
  GetUserStatusResponseBody,
} from '../../@types/api/userAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetUserStatusRequestParams & GetUserStatusRequestQuery & GetUserStatusRequestBody

export const getUserStatus
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ userId, signal }: Props) => {
      const response = await fetch(`${url}/v1/user/${userId}/status`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal,
      })

      return  await parseResponse<GetUserStatusResponseBody, GetUserStatusErrorResponseBody>(response)
    }
