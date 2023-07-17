import {
  ConfirmEscrowErrorResponseBody,
  ConfirmEscrowRequestBody,
  ConfirmEscrowRequestParams,
  ConfirmEscrowRequestQuery,
  ConfirmEscrowResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & ConfirmEscrowRequestParams & ConfirmEscrowRequestQuery & ConfirmEscrowRequestBody

export const confirmEscrow
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/escrow/confirm`, {
        headers: await getPrivateHeaders(url),
        method: 'POST',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<ConfirmEscrowResponseBody, ConfirmEscrowErrorResponseBody>(response)
    }
