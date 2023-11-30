import { BIP32Interface } from 'bip32'
import { chatMessages } from './data/chatMessages'
import { contract } from './data/contract'
import { contractSummary } from './data/contractSummary'
import { estimatedFees } from './data/estimatedFees'
import { belgianBTCEmbassy, decouvreBTC } from './data/events'
import { defaultFundingStatus } from './data/fundingStatus'
import { offerSummary } from './data/offerSummary'
import { sellOffer } from './data/sellOffer'
import { defaultUser } from './data/user'

const apiSuccess = () => Promise.resolve({ result: { success: true } })

const peachAPIMethods = {
  private: {
    contract: {
      acknowledgeDispute: apiSuccess,
      cancelContract: apiSuccess,
      getChat: () => Promise.resolve({ result: chatMessages.slice(0, 22) }),
      getContract: () => Promise.resolve({ result: contract }),
      getContractSummaries: () => Promise.resolve({ result: [contractSummary] }),
      raiseDispute: apiSuccess,
      rateUser: apiSuccess,
    },
    offer: {
      postSellOffer: () =>
        Promise.resolve({
          result: sellOffer,
        }),
      getOfferSummaries: () => Promise.resolve({ result: [offerSummary] }),
      confirmEscrow: apiSuccess,
      createEscrow: () =>
        Promise.resolve({
          result: {
            offerId: '38',
            escrow: 'escrow',
            funding: defaultFundingStatus,
          },
        }),
      getFundingStatus: () =>
        Promise.resolve({
          result: {
            funding: defaultFundingStatus,
            userConfirmationRequired: false,
            returnAddress: '',
            escrow: '',
            offerId: '',
          },
        }),
      refundSellOffer: apiSuccess,
      getRefundPSBT: () =>
        Promise.resolve({ result: { psbt: 'psbt', returnAddress: '', amount: 21, satsPerByte: 21, fees: 21 } }),
      patchOffer: apiSuccess,
      unmatchOffer: apiSuccess,
      getMatches: () => Promise.resolve({ result: { matches: ['match'], nextPage: undefined } }),
      republishSellOffer: () => Promise.resolve({ result: { newOfferId: 'newOfferId' } }),
      matchOffer: apiSuccess,
      getOffers: () => Promise.resolve({ result: { offers: [] } }),
    },
    user: {
      getSelfUser: () => Promise.resolve({ result: defaultUser }),
      submitUserSource: apiSuccess,
      getUserStatus: () => Promise.resolve({ result: { blocked: false, trades: 0, badExperience: false } }),
    },
  },
  public: {
    user: {
      checkReferralCode: () => Promise.resolve({ result: { valid: true } }),
      getUser: () => Promise.resolve({ result: defaultUser }),
    },
    bitcoin: {
      getFeeEstimate: () => Promise.resolve({ result: estimatedFees }),
    },
    contact: {
      sendReport: apiSuccess,
    },
    market: {
      marketPrices: () =>
        Promise.resolve({
          result: {
            EUR: 21000,
            CHF: 21000,
          },
        }),
    },
    events: {
      getEvents: () => Promise.resolve({ result: { events: [belgianBTCEmbassy, decouvreBTC] } }),
    },
    system: {
      getInfo: () => Promise.resolve({ result: { info: 'info' } }),
    },
  },
}

export const peachAPI = () => ({
  ...peachAPIMethods,
  setPeachAccount: (peachAccount: BIP32Interface) => peachAccount,
})

export class PeachAPI {
  private = peachAPIMethods.private

  public = peachAPIMethods.public

  peachAccount: BIP32Interface | null = null

  authToken: { accessToken: string; expiry: number } | undefined

  setPeachAccount(peachAccount: BIP32Interface) {
    this.peachAccount = peachAccount
    return peachAccount
  }

  async authenticate() {
    const newToken = await Promise.resolve({ accessToken: 'accessToken', expiry: new Date('2021-01-01').getTime() })
    this.authToken = newToken
    return this.authToken
  }
}
