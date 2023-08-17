import {
  GetOffersErrorResponseBody,
  GetOffersRequestBody,
  GetOffersRequestParams,
  GetOffersRequestQuery,
  GetOffersResponseBody,
} from '../../@types/api/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetOffersRequestParams & GetOffersRequestQuery & GetOffersRequestBody

export const getOffers
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ signal }: Props = {}) => {
      const response = await fetch(`${url}/v1/offers`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal,
      })

      return parseResponse<GetOffersResponseBody, GetOffersErrorResponseBody>(response)
    }
