import {
  ConfirmEscrowErrorResponseBody,
  ConfirmEscrowRequestBody,
  ConfirmEscrowRequestParams,
  ConfirmEscrowRequestQuery,
  ConfirmEscrowResponseBody,
} from '../../@types/api/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & ConfirmEscrowRequestParams & ConfirmEscrowRequestQuery & ConfirmEscrowRequestBody

export const confirmEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/escrow/confirm`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      signal,
    })

    return parseResponse<ConfirmEscrowResponseBody, ConfirmEscrowErrorResponseBody>(response)
  }
