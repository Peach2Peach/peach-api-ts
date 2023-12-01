import { BIP32Interface } from 'bip32'
import { chatMessages } from '../testData/chatMessages'
import { contract } from '../testData/contract'
import { contractSummary } from '../testData/contractSummary'
import { estimatedFees } from '../testData/estimatedFees'
import { belgianBTCEmbassy, decouvreBTC } from '../testData/events'
import { defaultFundingStatus } from '../testData/fundingStatus'
import { offerSummary } from '../testData/offerSummary'
import { sellOffer } from '../testData/offers'
import { defaultUser } from '../testData/user'

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
      getOfferDetails: () => Promise.resolve({ result: sellOffer }),
      cancelOffer: () => Promise.resolve({ result: { psbt: 'psbt' } }),
    },
    user: {
      getSelfUser: () => Promise.resolve({ result: defaultUser }),
      submitUserSource: apiSuccess,
      getUserStatus: () => Promise.resolve({ result: { blocked: false, trades: 0, badExperience: false } }),
      logoutUser: apiSuccess,
      auth: apiSuccess,
      redeemNoPeachFees: () => Promise.resolve({ result: { success: true, bonusPoints: 10 } }),
      redeemReferralCode: () => Promise.resolve({ result: { success: true, bonusPoints: 0 } }),
      deletePaymentHash: apiSuccess,
      enableTransactionBatching: apiSuccess,
      getUserPaymentMethodInfo: () => Promise.resolve({ result: { forbidden: { buy: [], sell: [] } } }),
      updateUser: apiSuccess,
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

  options: { peachAccount: BIP32Interface | null } = {
    peachAccount: null,
  }

  authToken: { accessToken: string; expiry: number } | undefined

  setPeachAccount(peachAccount: BIP32Interface) {
    this.options.peachAccount = peachAccount
    return peachAccount
  }

  async authenticate() {
    const newToken = await Promise.resolve({ accessToken: 'accessToken', expiry: new Date('2021-01-01').getTime() })
    this.authToken = newToken
    return this.authToken
  }
}
