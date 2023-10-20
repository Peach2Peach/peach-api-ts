import { BIP32Interface } from 'bip32'

export const peachAPI = () => ({
  private: {
    contract: {
      acknowledgeDispute: () => Promise.resolve({ result: { success: true }, error: null }),
    },
  },
  setPeachAccount: (peachAccount: BIP32Interface) => peachAccount,
})
