import { PeachAPIOptions, RequestProps } from '../../types'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { getPrivateHeaders } from '../getPrivateHeaders'
import {
  CreateEscrowErrorResponseBody,
  CreateEscrowRequestBody,
  CreateEscrowRequestParams,
  CreateEscrowRequestQuery,
  CreateEscrowResponseBody,
} from '../../../@types/offerAPI'

type Props = RequestProps & CreateEscrowRequestParams & CreateEscrowRequestQuery & CreateEscrowRequestBody

export const createEscrow
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, publicKey, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/escrow`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          publicKey,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<CreateEscrowResponseBody, CreateEscrowErrorResponseBody>(response)
    }
