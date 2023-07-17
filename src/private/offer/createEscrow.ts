import {
  CreateEscrowErrorResponseBody,
  CreateEscrowRequestBody,
  CreateEscrowRequestParams,
  CreateEscrowRequestQuery,
  CreateEscrowResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & CreateEscrowRequestParams & CreateEscrowRequestQuery & CreateEscrowRequestBody

export const createEscrow =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, publicKey, timeout }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/escrow`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify({
        publicKey,
      }),
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<CreateEscrowResponseBody, CreateEscrowErrorResponseBody>(response)
  }
