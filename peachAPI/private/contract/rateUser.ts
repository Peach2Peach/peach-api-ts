import {
  RateUserErrorResponseBody,
  RateUserRequestBody,
  RateUserRequestParams,
  RateUserRequestQuery,
  RateUserResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & RateUserRequestParams & RateUserRequestQuery & RateUserRequestBody

export const rateUser
  = ({ url }: PeachAPIOptions) =>
    async ({ contractId, rating, signature, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/user/rate`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          rating,
          signature,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<RateUserResponseBody, RateUserErrorResponseBody>(response)
    }
