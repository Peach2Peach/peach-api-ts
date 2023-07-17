import {
  AcknowledgeDisputeErrorResponseBody,
  AcknowledgeDisputeRequestBody,
  AcknowledgeDisputeRequestParams,
  AcknowledgeDisputeRequestQuery,
  AcknowledgeDisputeResponseBody,
} from '../../../@types/contractAPI'
import { getAbortWithTimeout } from '../../../utils/fetch/getAbortWithTimeout'
import { parseResponse } from '../../parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  AcknowledgeDisputeRequestParams &
  AcknowledgeDisputeRequestQuery &
  AcknowledgeDisputeRequestBody

export const acknowledgeDispute
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ contractId, email, timeout }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/dispute/acknowledge`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
        signal: timeout ? getAbortWithTimeout(timeout).signal : undefined,
      })

      return parseResponse<AcknowledgeDisputeResponseBody, AcknowledgeDisputeErrorResponseBody>(response)
    }
