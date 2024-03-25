import { APIError } from '../../@types/global'
import { BuyOffer, EscrowType, SellOffer } from '../../@types/offer'
import { MeansOfPayment } from '../../@types/payment'
import { parseResponse } from '../../helpers/parseResponse'
import { PeachAPIHelpers, PeachAPIOptions, RequestProps } from '../../types'

type SearchOffersSummaryRequestBody = {
  type?: 'ask' | 'bid'
  escrowType?: EscrowType,
  amount?: number | [number, number]
  meansOfPayment?: MeansOfPayment
  maxPremium?: number
  minReputation?: number
}
type SearchOffersSummaryResponseBody = {
  offers: (Pick<SellOffer, 'amount' | 'premium'> | Pick<BuyOffer, 'amount'>)[]
}
type SearchOffersSummaryErrorResponseBody = APIError<null>
type Props = RequestProps & SearchOffersSummaryRequestBody

export const searchOfferSummaries =
  ({ url }: PeachAPIOptions, helpers: PeachAPIHelpers) =>
  async ({ signal, type, escrowType, amount, meansOfPayment, maxPremium, minReputation }: Props) => {
    const requestBody = { type, escrowType, amount, meansOfPayment, maxPremium, minReputation }
    const response = await fetch(`${url}/v1/offer/search/summary`, {
      headers: helpers.getPrivateHeaders(url),
      method: 'POST',
      body: JSON.stringify(requestBody),
      signal,
    })

    return parseResponse<SearchOffersSummaryResponseBody, SearchOffersSummaryErrorResponseBody>(response)
  }
