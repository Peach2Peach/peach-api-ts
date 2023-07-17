import {
  UnlinkPaymentHashErrorResponseBody,
  UnlinkPaymentHashRequestBody,
  UnlinkPaymentHashRequestParams,
  UnlinkPaymentHashRequestQuery,
  UnlinkPaymentHashResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  UnlinkPaymentHashRequestParams &
  UnlinkPaymentHashRequestQuery &
  UnlinkPaymentHashRequestBody

export const deletePaymentHash
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ hashes, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/paymentHash`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'DELETE',
        body: JSON.stringify({
          hashes,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<UnlinkPaymentHashResponseBody, UnlinkPaymentHashErrorResponseBody>(response)
    }
