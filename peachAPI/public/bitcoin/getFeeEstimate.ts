import {
  EstimateFeesErrorResponseBody,
  EstimateFeesRequestBody,
  EstimateFeesRequestParams,
  EstimateFeesRequestQuery,
  EstimateFeesResponseBody,
} from '../../../@types/electrsAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIOptions, RequestProps } from '../../types'
import { getPublicHeaders } from '../getPublicHeaders'

type Props = RequestProps & EstimateFeesRequestParams & EstimateFeesRequestQuery & EstimateFeesRequestBody

export const getFeeEstimate
  = ({ url }: PeachAPIOptions) =>
    async ({ timeout, abortSignal }: Props) => {
      const response = await fetch(`${url}/v1/estimateFees`, {
        headers: getPublicHeaders(url),
        method: 'GET',
        signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
      })

      return parseResponse<EstimateFeesResponseBody, EstimateFeesErrorResponseBody>(response)
    }
