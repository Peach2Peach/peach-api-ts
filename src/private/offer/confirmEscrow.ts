import {
  ConfirmEscrowErrorResponseBody,
  ConfirmEscrowRequestBody,
  ConfirmEscrowRequestParams,
  ConfirmEscrowRequestQuery,
  ConfirmEscrowResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & ConfirmEscrowRequestParams & ConfirmEscrowRequestQuery & ConfirmEscrowRequestBody

export const confirmEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, timeout }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/escrow/confirm`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<ConfirmEscrowResponseBody, ConfirmEscrowErrorResponseBody>(response)
  }
