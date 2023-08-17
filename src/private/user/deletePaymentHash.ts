import {
  UnlinkPaymentHashErrorResponseBody,
  UnlinkPaymentHashRequestBody,
  UnlinkPaymentHashRequestParams,
  UnlinkPaymentHashRequestQuery,
  UnlinkPaymentHashResponseBody,
} from '../../@types/api/userAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  UnlinkPaymentHashRequestParams &
  UnlinkPaymentHashRequestQuery &
  UnlinkPaymentHashRequestBody

export const deletePaymentHash =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ hashes, signal }: Props) => {
    const response = await fetch(`${url}/v1/user/paymentHash`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'DELETE',
      body: JSON.stringify({
        hashes,
      }),
      signal,
    })

    return parseResponse<UnlinkPaymentHashResponseBody, UnlinkPaymentHashErrorResponseBody>(response)
  }
