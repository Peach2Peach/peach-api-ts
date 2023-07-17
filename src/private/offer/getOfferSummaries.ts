import {
  GetOfferSummariesErrorResponseBody,
  GetOfferSummariesRequestBody,
  GetOfferSummariesRequestParams,
  GetOfferSummariesRequestQuery,
  GetOfferSummariesResponseBody,
} from '../../@types/offerAPI'
import { getAbortWithTimeout } from '../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  GetOfferSummariesRequestParams &
  GetOfferSummariesRequestQuery &
  GetOfferSummariesRequestBody

export const getOfferSummaries =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ timeout, abortSignal }: Props) => {
    const response = await fetch(`${url}/v1/offers/summary`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'GET',
      signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
    })

    return parseResponse<GetOfferSummariesResponseBody, GetOfferSummariesErrorResponseBody>(response)
  }
