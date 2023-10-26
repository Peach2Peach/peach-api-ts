import { getResponseError } from './getResponseError'

describe('getResponseError', () => {
  it('returns corresponding error codes for status codes', () => {
    const headers = new Headers()
    headers.set('cf-mitigated', 'challenge')
    expect(getResponseError({ statusText: 'Aborted' })).toBe('ABORTED')
    expect(getResponseError({ status: 0 })).toBe('EMPTY_RESPONSE')
    expect(getResponseError({ status: 500 })).toBe('INTERNAL_SERVER_ERROR')
    expect(getResponseError({ status: 503 })).toBe('SERVICE_UNAVAILABLE')
    expect(getResponseError({ status: 429 })).toBe('TOO_MANY_REQUESTS')
    expect(getResponseError({ headers })).toBe('HUMAN_VERIFICATION_REQUIRED')
    expect(getResponseError({})).toBe('NETWORK_ERROR')
  })
  it('returns null if response is not an error', () => {
    expect(getResponseError({ status: 200 })).toBeNull()
  })
})
