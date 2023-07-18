import {
  AcknowledgeDisputeErrorResponseBody,
  AcknowledgeDisputeRequestBody,
  AcknowledgeDisputeRequestParams,
  AcknowledgeDisputeRequestQuery,
  AcknowledgeDisputeResponseBody,
} from '../../@types/contractAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  AcknowledgeDisputeRequestParams &
  AcknowledgeDisputeRequestQuery &
  AcknowledgeDisputeRequestBody

export const acknowledgeDispute
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ contractId, email, signal }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/dispute/acknowledge`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
        signal,
      })

      return parseResponse<AcknowledgeDisputeResponseBody, AcknowledgeDisputeErrorResponseBody>(response)
    }
