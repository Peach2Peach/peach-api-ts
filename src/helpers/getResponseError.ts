const isCloudflareChallenge = (headers: Response['headers']) => headers.get('cf-mitigated') === 'challenge'

export const RESPONSE_ERRORS = {
  0: 'EMPTY_RESPONSE',
  429: 'TOO_MANY_REQUESTS',
  500: 'INTERNAL_SERVER_ERROR',
  503: 'SERVICE_UNAVAILABLE',
  ABORTED: 'ABORTED',
  NETWORK_ERROR: 'NETWORK_ERROR',
}

export const isErrorStatus = (status?: number | string | null): status is keyof typeof RESPONSE_ERRORS =>
  typeof status !== 'undefined' && status !== null && status in RESPONSE_ERRORS


type Props = Partial<Pick<Response, 'statusText'|'status'|'headers'>>

export const getResponseError = ({ statusText, status, headers }: Props) => {
  if (statusText === 'Aborted') return RESPONSE_ERRORS.ABORTED

  if (headers && isCloudflareChallenge(headers)) return 'HUMAN_VERIFICATION_REQUIRED'
  if (isErrorStatus(status)) return RESPONSE_ERRORS[status]
  if (!status) return RESPONSE_ERRORS.NETWORK_ERROR
  return null
}
