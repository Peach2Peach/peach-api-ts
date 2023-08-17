import {
  GetFundingStatusErrorResponseBody,
  GetFundingStatusRequestBody,
  GetFundingStatusRequestParams,
  GetFundingStatusRequestQuery,
  GetFundingStatusResponseBody,
} from '../../@types/api/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetFundingStatusRequestParams & GetFundingStatusRequestQuery & GetFundingStatusRequestBody

export const getFundingStatus =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ offerId, signal }: Props) => {
    const response = await fetch(`${url}/v1/offer/${offerId}/escrow`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'GET',
      signal,
    })

    return parseResponse<GetFundingStatusResponseBody, GetFundingStatusErrorResponseBody>(response)
  }
