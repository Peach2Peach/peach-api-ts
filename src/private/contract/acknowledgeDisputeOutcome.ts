import {
  AcknowledgeDisputeOutcomeErrorResponseBody,
  AcknowledgeDisputeOutcomeRequestBody,
  AcknowledgeDisputeOutcomeRequestParams,
  AcknowledgeDisputeOutcomeRequestQuery,
  AcknowledgeDisputeOutcomeResponseBody,
} from '../../@types/api/contractAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps &
  AcknowledgeDisputeOutcomeRequestParams &
  AcknowledgeDisputeOutcomeRequestQuery &
  AcknowledgeDisputeOutcomeRequestBody

export const acknowledgeDisputeOutcome
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ contractId, signal }: Props) => {
      const response = await fetch(`${url}/v1/contract/${contractId}/dispute/acknowledgeOutcome`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'POST',
        signal,
      })

      return parseResponse<AcknowledgeDisputeOutcomeResponseBody, AcknowledgeDisputeOutcomeErrorResponseBody>(response)
    }
