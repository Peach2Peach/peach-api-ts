import { APIError } from '../@types/global'
import { dateTimeReviver } from '../utils/json'
import { getError, getResult, parseError } from '../utils/result'
import { Result } from '../utils/result/types'
import { RESPONSE_ERRORS, getResponseError, isErrorStatus } from './getResponseError'

export const parseResponse = async <R, E extends APIError<string | null>>(
  response: Response,
  string = false,
): Promise<Result<R, E>> => {
  try {
    const responseError = getResponseError(response)
    if (isErrorStatus(responseError)) return getError({ error: RESPONSE_ERRORS[responseError] } as E)

    const data = !string ? JSON.parse(await response.text(), dateTimeReviver) : await response.text()

    if (response.status !== 200) return getError(data)
    return getResult(data)
  } catch (e) {
    const parsedError = parseError(e)
    if (parsedError.includes('JSON Parse error')) {
      return getError({ error: RESPONSE_ERRORS[500] } as E)
    }

    return getError({ error: RESPONSE_ERRORS[500] } as E)
  }
}
