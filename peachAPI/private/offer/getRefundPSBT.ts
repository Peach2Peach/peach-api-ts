import {
  GetRefundPSBTErrorResponseBody,
  GetRefundPSBTRequestBody,
  GetRefundPSBTRequestParams,
  GetRefundPSBTRequestQuery,
  GetRefundPSBTResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & GetRefundPSBTRequestParams & GetRefundPSBTRequestQuery & GetRefundPSBTRequestBody

export const getRefundPSBT
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, timeout }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/refundPSBT`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<GetRefundPSBTResponseBody, GetRefundPSBTErrorResponseBody>(response)
    }
