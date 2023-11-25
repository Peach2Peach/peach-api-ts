import { BIP32Interface } from 'bip32'
import { chatMessages } from './data/chatMessages'
import { contract } from './data/contract'
import { contractSummary } from './data/contractSummary'
import { offerSummary } from './data/offerSummary'
import { sellOffer } from './data/sellOffer'
import { defaultUser } from './data/user'

const apiSuccess = () => Promise.resolve({ result: { success: true }, error: null })

const peachAPIMethods = {
  private: {
    contract: {
      acknowledgeDispute: apiSuccess,
      cancelContract: apiSuccess,
      getChat: () => Promise.resolve({ result: chatMessages.slice(0, 22), error: null }),
      getContract: () => Promise.resolve({ result: contract, error: null }),
      getContractSummaries: () => Promise.resolve({ result: [contractSummary], error: null }),
      getOfferSummaries: () => Promise.resolve({ result: [offerSummary], error: null }),
      raiseDispute: apiSuccess,
      rateUser: apiSuccess,
    },
    offer: {
      postSellOffer: () =>
        Promise.resolve({
          result: sellOffer,
          error: null,
        }),
    },
    user: {
      getSelfUser: () => Promise.resolve({ result: defaultUser, error: null }),
      submitUserSource: apiSuccess,
    },
  },
  public: {
    user: {
      checkReferralCode: () => Promise.resolve({ result: { valid: true }, error: null }),
    },
  },
}

export const peachAPI = () => ({
  ...peachAPIMethods,
  setPeachAccount: (peachAccount: BIP32Interface) => peachAccount,
})

export class PeachAPI {
  private = peachAPIMethods.private

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
