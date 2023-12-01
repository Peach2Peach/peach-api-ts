import { peachAPI } from './peachAPI'
import { createTestWallet } from './test/helpers/createTestWallet'
import { PeachAPIOptions } from './types'

describe('peachAPI', () => {
  const fetchMock = jest.fn()
  global.fetch = fetchMock

  const options: PeachAPIOptions = {
    peachAccount: null,
    url: 'api.peachbitcoin.com',
    uniqueId: 'test',
  }
  const peachAccount = createTestWallet()
  const peachApi = peachAPI(options)
  it('should create a peachAPI wrapper instance', () => {
    expect(peachApi.apiOptions).toEqual(options)
    expect(peachApi.public).toBeInstanceOf(Object)
    expect(peachApi.private).toBeInstanceOf(Object)
  })
  it('should set peachAccount after creation', () => {
    peachApi.setPeachAccount(peachAccount)
    expect(peachApi.apiOptions.peachAccount).toEqual(peachAccount)
  })
  it('should call authentication endpoint', () => {
    peachApi.authenticate()
    expect(fetchMock).toHaveBeenCalledWith(`${options.url}/v1/user/auth/`, {
      body: expect.any(String),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: options.url,
        Referer: options.url,
      },
      method: 'POST',
      signal: undefined,
    })
    expect(
      fetchMock.mock.calls[0][1].body.includes(`"publicKey":"${peachAccount.publicKey.toString('hex')}`)
    ).toBeTruthy()
  })
})
