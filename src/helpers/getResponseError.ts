export const RESPONSE_ERRORS = {
  0: 'EMPTY_RESPONSE',
  429: 'TOO_MANY_REQUESTS',
  500: 'INTERNAL_SERVER_ERROR',
  503: 'SERVICE_UNAVAILABLE',
  ABORTED: 'ABORTED',
  NETWORK_ERROR: 'NETWORK_ERROR',
}

export const isErrorStatus = (status?: number | string | null): status is keyof typeof RESPONSE_ERRORS =>
  !!status && status in RESPONSE_ERRORS

type Props = {
  statusText?: string
  status?: number
}

export const getResponseError = ({ statusText, status }: Props) => {
  if (statusText === 'Aborted') return RESPONSE_ERRORS.ABORTED

  if (isErrorStatus(status)) return RESPONSE_ERRORS[status]
  if (!status) return RESPONSE_ERRORS.NETWORK_ERROR
  return null
}
