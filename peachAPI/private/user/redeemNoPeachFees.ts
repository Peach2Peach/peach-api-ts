import {
  RedeemFiveTradesErrorResponseBody,
  RedeemFiveTradesRequestBody,
  RedeemFiveTradesRequestParams,
  RedeemFiveTradesRequestQuery,
  RedeemFiveTradesResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & RedeemFiveTradesRequestParams & RedeemFiveTradesRequestQuery & RedeemFiveTradesRequestBody

export const redeemNoPeachFees
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/referral/redeem/fiveFreeTrades`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'PATCH',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<RedeemFiveTradesResponseBody, RedeemFiveTradesErrorResponseBody>(response)
    }
