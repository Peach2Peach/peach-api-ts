import { getPublicHeaders } from './getPublicHeaders'

describe('getPublicHeaders', () => {
  const url = 'url'
  const userAgent = 'userAgent'

  it('should return public headers', () => {
    const result = getPublicHeaders(url)
    expect(result).toStrictEqual({
      Origin: url,
      Referer: url,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': undefined,
    })
  })
  it('should return public headers with user agent', () => {
    const result = getPublicHeaders(url, userAgent)
    expect(result).toStrictEqual({
      Origin: url,
      Referer: url,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': userAgent,
    })
  })
})
