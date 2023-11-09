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
