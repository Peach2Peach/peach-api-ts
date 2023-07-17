import {
  RedeemReferralCodeErrorResponseBody,
  RedeemReferralCodeRequestBody,
  RedeemReferralCodeRequestParams,
  RedeemReferralCodeRequestQuery,
  RedeemReferralCodeResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps &
  RedeemReferralCodeRequestParams &
  RedeemReferralCodeRequestQuery &
  RedeemReferralCodeRequestBody

export const redeemReferralCode
  = ({ url }: PeachAPIOptions) =>
    async ({ code, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/referral/redeem/referralCode`, {
        headers: await getPrivateHeaders(url),
        method: 'PATCH',
        body: JSON.stringify({
          code,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<RedeemReferralCodeResponseBody, RedeemReferralCodeErrorResponseBody>(response)
    }
