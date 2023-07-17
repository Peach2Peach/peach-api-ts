import {
  CheckReferralCodeErrorResponseBody,
  CheckReferralCodeRequestBody,
  CheckReferralCodeRequestParams,
  CheckReferralCodeRequestQuery,
  CheckReferralCodeResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPublicHeaders } from '../getPublicHeaders'

type Props = RequestProps &
  CheckReferralCodeRequestParams &
  CheckReferralCodeRequestQuery &
  CheckReferralCodeRequestBody

export const checkReferralCode
  = ({ url }: PeachAPIOptions) =>
    async ({ code, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/referral?code=${code}`, {
        headers: getPublicHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<CheckReferralCodeResponseBody, CheckReferralCodeErrorResponseBody>(response)
    }
