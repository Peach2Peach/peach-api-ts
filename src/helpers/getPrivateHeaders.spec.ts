import { getPrivateHeaders } from './getPrivateHeaders'

describe('getPrivateHeaders', () => {
  it('should return private headers', () => {
    const url = 'url'
    const authtoken = 'authtoken'
    const result = getPrivateHeaders(url, authtoken)
    expect(result).toStrictEqual({
      Origin: url,
      Referer: url,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authtoken,
    })
  })
})
