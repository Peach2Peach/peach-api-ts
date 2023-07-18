import {
  RateUserErrorResponseBody,
  RateUserRequestBody,
  RateUserRequestParams,
  RateUserRequestQuery,
  RateUserResponseBody,
} from '../../@types/contractAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & RateUserRequestParams & RateUserRequestQuery & RateUserRequestBody

export const rateUser =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ contractId, rating, signature, timeout }: Props) => {
    const response = await fetch(`${url}/v1/contract/${contractId}/user/rate`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        rating,
        signature,
      }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<RateUserResponseBody, RateUserErrorResponseBody>(response)
  }
