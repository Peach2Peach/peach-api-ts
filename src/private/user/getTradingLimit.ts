import {
  GetTradingLimitErrorResponseBody,
  GetTradingLimitRequestBody,
  GetTradingLimitRequestParams,
  GetTradingLimitRequestQuery,
  GetTradingLimitResponseBody,
} from '../../@types/userAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { getResult } from '../../utils/result'
import { parseResponse } from '../../parseResponse'
import { getPeachAccount } from '../../peachAccount'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetTradingLimitRequestParams & GetTradingLimitRequestQuery & GetTradingLimitRequestBody

export const getTradingLimit
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ timeout }: Props) => {
      const peachAccount = getPeachAccount()
      if (!peachAccount) return [null, { error: 'UNAUTHORIZED' }]

      const response = await fetch(`${url}/v1/user/tradingLimit`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      const parsedResponse = await parseResponse<GetTradingLimitResponseBody, GetTradingLimitErrorResponseBody>(response)

      if (!parsedResponse.isOk()) return parsedResponse

      const result = parsedResponse.getValue()
      if (result.daily === null) result.daily = Infinity
      if (result.monthlyAnonymous === null) result.monthlyAnonymous = Infinity
      if (result.yearly === null) result.yearly = Infinity

      return getResult(result)
    }
