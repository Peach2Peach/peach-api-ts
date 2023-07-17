import { getPublicHeaders } from './getPublicHeaders'

describe('getPublicHeaders', () => {
  it('should return an object with the correct keys', () => {
    const url = 'url'
    const result = getPublicHeaders(url)
    expect(result).toStrictEqual({
      Origin: url,
      Referer: url,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
  })
})
