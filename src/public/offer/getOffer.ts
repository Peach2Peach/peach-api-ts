import {
  GetOfferErrorResponseBody,
  GetOfferRequestBody,
  GetOfferRequestParams,
  GetOfferRequestQuery,
  GetOfferResponseBody,
} from '../../@types/api/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetOfferRequestParams & GetOfferRequestQuery & GetOfferRequestBody

export const getOffer
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ offerId, signal }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/details`, {
        headers: helpers.getPublicHeaders(url),
        method: 'GET',
        signal,
      })

      return parseResponse<GetOfferResponseBody, GetOfferErrorResponseBody>(response)
    }
