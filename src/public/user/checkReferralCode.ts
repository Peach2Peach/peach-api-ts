import {
  CheckReferralCodeErrorResponseBody,
  CheckReferralCodeRequestBody,
  CheckReferralCodeRequestParams,
  CheckReferralCodeRequestQuery,
  CheckReferralCodeResponseBody,
} from '../../@types/api/userAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  CheckReferralCodeRequestParams &
  CheckReferralCodeRequestQuery &
  CheckReferralCodeRequestBody

export const checkReferralCode =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ code, signal }: Props) => {
    const response = await fetch(`${url}/v1/user/referral?code=${code}`, {
      headers: helpers.getPublicHeaders(url),
      method: 'GET',
      signal,
    })

    return parseResponse<CheckReferralCodeResponseBody, CheckReferralCodeErrorResponseBody>(response)
  }
