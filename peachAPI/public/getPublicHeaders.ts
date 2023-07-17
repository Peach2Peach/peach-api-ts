export const getPublicHeaders = (url: string): RequestInit['headers'] => ({
  Origin: url,
  Referer: url,
  Accept: 'application/json',
  'Content-Type': 'application/json',
})
