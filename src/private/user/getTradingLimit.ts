import {
  GetTradingLimitErrorResponseBody,
  GetTradingLimitRequestBody,
  GetTradingLimitRequestParams,
  GetTradingLimitRequestQuery,
  GetTradingLimitResponseBody,
} from '../../@types/api/userAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetTradingLimitRequestParams & GetTradingLimitRequestQuery & GetTradingLimitRequestBody

export const getTradingLimit =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/user/tradingLimit`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'GET',
      signal,
    })

    const parsedResponse = await parseResponse<GetTradingLimitResponseBody, GetTradingLimitErrorResponseBody>(response)
    const { result } = parsedResponse

    if (!result) return parsedResponse
    return {
      ...parsedResponse,
      result: {
        ...result,
        daily: result?.daily ?? Infinity,
        monthlyAnonymous: result?.monthlyAnonymous ?? Infinity,
        yearly: result?.yearly ?? Infinity,
      },
    }
  }
