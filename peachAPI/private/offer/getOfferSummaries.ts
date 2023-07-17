import {
  GetOfferSummariesErrorResponseBody,
  GetOfferSummariesRequestBody,
  GetOfferSummariesRequestParams,
  GetOfferSummariesRequestQuery,
  GetOfferSummariesResponseBody,
} from '../../../@types/offerAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPrivateHeaders } from '../getPrivateHeaders'

type Props = RequestProps &
  GetOfferSummariesRequestParams &
  GetOfferSummariesRequestQuery &
  GetOfferSummariesRequestBody

export const getOfferSummaries
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/offers/summary`, {
        headers: await getPrivateHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<GetOfferSummariesResponseBody, GetOfferSummariesErrorResponseBody>(response)
    }
