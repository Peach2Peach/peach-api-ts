import {
  GetOfferDetailsErrorResponseBody,
  GetOfferDetailsRequestBody,
  GetOfferDetailsRequestParams,
  GetOfferDetailsRequestQuery,
  GetOfferDetailsResponseBody,
} from '../../@types/offerAPI'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type Props = RequestProps & GetOfferDetailsRequestParams & GetOfferDetailsRequestQuery & GetOfferDetailsRequestBody

export const getOfferDetails
  = ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
    async ({ offerId, signal }: Props) => {
      const response = await fetch(`${url}/v1/offer/${offerId}/details`, {
        headers: helpers.getPrivateHeaders(url),
        method: 'GET',
        signal,
      })

      return parseResponse<GetOfferDetailsResponseBody, GetOfferDetailsErrorResponseBody>(response)
    }
