import {
  UnlinkPaymentHashErrorResponseBody,
  UnlinkPaymentHashRequestBody,
  UnlinkPaymentHashRequestParams,
  UnlinkPaymentHashRequestQuery,
  UnlinkPaymentHashResponseBody,
} from '../../../@types/userAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps &
  UnlinkPaymentHashRequestParams &
  UnlinkPaymentHashRequestQuery &
  UnlinkPaymentHashRequestBody

export const deletePaymentHash
  = ({ url }: PeachAPIOptions) =>
    async ({ hashes, timeout }: Props) => {
      const response = await fetch(`${url}/v1/user/paymentHash`, {
        headers: await getPrivateHeaders(url),
        method: 'DELETE',
        body: JSON.stringify({
          hashes,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<UnlinkPaymentHashResponseBody, UnlinkPaymentHashErrorResponseBody>(response)
    }
