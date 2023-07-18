import {
  EstimateFeesErrorResponseBody,
  EstimateFeesRequestBody,
  EstimateFeesRequestParams,
  EstimateFeesRequestQuery,
  EstimateFeesResponseBody,
} from '../../@types/electrsAPI'
import { getAbortWithTimeout } from '../../utils/fetch'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & EstimateFeesRequestParams & EstimateFeesRequestQuery & EstimateFeesRequestBody

export const getFeeEstimate =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ timeout, abortSignal }: Props) => {
    const response = await fetch(`${url}/v1/estimateFees`, {
      headers: helpers.getPublicHeaders(url),
      method: 'GET',
      signal: abortSignal ?? (timeout ? getAbortWithTimeout(timeout).signal : undefined),
    })

    return parseResponse<EstimateFeesResponseBody, EstimateFeesErrorResponseBody>(response)
  }
