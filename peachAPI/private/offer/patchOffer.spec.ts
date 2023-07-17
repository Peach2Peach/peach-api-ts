import { patchOffer } from './patchOffer'

import { omit } from '../../../object'

const fetchMock = jest.fn()
jest.mock('../../../fetch', () => ({
  __esModule: true,
  default: (...args: unknown[]) => fetchMock(...args),
}))

jest.mock('../getPrivateHeaders', () => ({
  getPrivateHeaders: () => ({
    'Content-Type': 'application/json',
    'X-Api-Key': undefined,
  }),
}))

describe('patchOffer', () => {
  const props = {
    offerId: 'offerId',
    refundAddress: 'refundAddress',
    refundTx: 'refundTx',
    premium: 10,
  }
  it('should call fetch with the correct arguments', async () => {
    await patchOffer(props)
    expect(fetchMock).toHaveBeenCalledWith(`${url}/v1/offer/offerId`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': undefined,
      },
      body: JSON.stringify(omit(props, 'offerId')),
      method: 'PATCH',
      signal: undefined,
    })
  })
})
