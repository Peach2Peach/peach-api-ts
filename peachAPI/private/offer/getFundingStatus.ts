import {
  GetFundingStatusErrorResponseBody,
  GetFundingStatusRequestBody,
  GetFundingStatusRequestParams,
  GetFundingStatusRequestQuery,
  GetFundingStatusResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps & GetFundingStatusRequestParams & GetFundingStatusRequestQuery & GetFundingStatusRequestBody

export const getFundingStatus
  = ({ url }: PeachAPIOptions) =>
    async ({ offerId, timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/escrow`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetFundingStatusResponseBody, GetFundingStatusErrorResponseBody>(response)
    }
