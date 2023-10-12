import {
  GetPaymentMethodInfoErrorResponseBody,
  GetPaymentMethodInfoRequestBody,
  GetPaymentMethodInfoRequestParams,
  GetPaymentMethodInfoRequestQuery,
  GetPaymentMethodInfoResponseBody,
} from '../../@types/api/systemAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetPaymentMethodInfoRequestParams & GetPaymentMethodInfoRequestQuery & GetPaymentMethodInfoRequestBody

export const getPaymentMethodInfo
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ signal }: Props = {}) => {
      const response = await fetch(`${url}/v1/info/paymentMethods`, {
        headers: {
          ...helpers.getPublicHeaders(url),
          'Cache-Control': 'no-cache',
        },
        method: 'GET',
        signal,
      })

      return parseResponse<GetPaymentMethodInfoResponseBody, GetPaymentMethodInfoErrorResponseBody>(response)
    }
