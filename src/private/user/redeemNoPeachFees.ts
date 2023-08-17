import {
  RedeemFiveTradesErrorResponseBody,
  RedeemFiveTradesRequestBody,
  RedeemFiveTradesRequestParams,
  RedeemFiveTradesRequestQuery,
  RedeemFiveTradesResponseBody,
} from '../../@types/api/userAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & RedeemFiveTradesRequestParams & RedeemFiveTradesRequestQuery & RedeemFiveTradesRequestBody

export const redeemNoPeachFees =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal }: Props = {}) => {
    const response = await fetch(`${url}/v1/user/referral/redeem/fiveFreeTrades`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'PATCH',
      signal,
    })

    return parseResponse<RedeemFiveTradesResponseBody, RedeemFiveTradesErrorResponseBody>(response)
  }
