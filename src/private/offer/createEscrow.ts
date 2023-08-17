import {
  CreateEscrowErrorResponseBody,
  CreateEscrowRequestBody,
  CreateEscrowRequestParams,
  CreateEscrowRequestQuery,
  CreateEscrowResponseBody,
} from '../../@types/api/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & CreateEscrowRequestParams & CreateEscrowRequestQuery & CreateEscrowRequestBody

export const createEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, publicKey, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/escrow`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        publicKey,
      }),
      signal,
    })

    return parseResponse<CreateEscrowResponseBody, CreateEscrowErrorResponseBody>(response)
  }
