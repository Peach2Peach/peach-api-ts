export const peachAPI = () => ({
  private: {
    contract: {
      acknowledgeDispute: () => Promise.resolve({ result: { success: true }, error: null }),
    },
  },
})
