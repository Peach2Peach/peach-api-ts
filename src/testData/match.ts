import { Match } from '../@types/match'
import { defaultUser } from './userData'

export const match: Match = {
  user: defaultUser,
  escrowType: 'bitcoin',
  offerId: 'offerId',
  amount: 210000,
  premium: 2.1,
  prices: {
    EUR: 210000,
  },
  creationDate: new Date('2009-01-03T18:15:05.000Z'),
  lastModified: new Date('2009-01-03T18:15:05.000Z'),
  instantTrade: false,
  matched: false,
  matchedPrice: null,
  meansOfPayment: {
    EUR: ['sepa'],
  },
  symmetricKeyEncrypted: 'symmetricKeyEncrypted',
  symmetricKeySignature: 'symmetricKeySignature',
  unavailable: {
    exceedsLimit: [],
  },
}
