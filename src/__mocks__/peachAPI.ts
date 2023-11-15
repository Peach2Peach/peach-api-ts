import { BIP32Interface } from 'bip32'
import { sellOffer } from './data/sellOffer'
import { defaultUser } from './data/user'

const peachAPIMethods = {
  private: {
    contract: {
      acknowledgeDispute: () => Promise.resolve({ result: { success: true }, error: null }),
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

  setPeachAccount(peachAccount: BIP32Interface) {
    this.peachAccount = peachAccount
    return peachAccount
  }
}
