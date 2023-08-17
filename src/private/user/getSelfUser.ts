import {
  GetSelfUserErrorResponseBody,
  GetSelfUserRequestBody,
  GetSelfUserRequestParams,
  GetSelfUserRequestQuery,
  GetSelfUserResponseBody,
} from '../../@types/api/userAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetSelfUserRequestParams & GetSelfUserRequestQuery & GetSelfUserRequestBody

export const getSelfUser
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ signal }: Props = {}) => {
      const response = await fetch(`${url}/v1/user/me`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal,
      })

      return parseResponse<GetSelfUserResponseBody, GetSelfUserErrorResponseBody>(response)
    }
