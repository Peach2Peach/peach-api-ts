import { BIP32Interface } from 'bip32'
import { sellOffer } from './data/sellOffer'

export const peachAPI = () => ({
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
  },
  setPeachAccount: (peachAccount: BIP32Interface) => peachAccount,
})

export class PeachAPI {
  private = {
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
  }

  peachAccount: BIP32Interface | null = null

  setPeachAccount(peachAccount: BIP32Interface) {
    this.peachAccount = peachAccount
    return peachAccount
  }
}
