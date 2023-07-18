import {
  GetRefundPSBTErrorResponseBody,
  GetRefundPSBTRequestBody,
  GetRefundPSBTRequestParams,
  GetRefundPSBTRequestQuery,
  GetRefundPSBTResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetRefundPSBTRequestParams & GetRefundPSBTRequestQuery & GetRefundPSBTRequestBody

export const getRefundPSBT =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, timeout }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/refundPSBT`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'GET',
      signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
    })

    return parseResponse<GetRefundPSBTResponseBody, GetRefundPSBTErrorResponseBody>(response)
  }
