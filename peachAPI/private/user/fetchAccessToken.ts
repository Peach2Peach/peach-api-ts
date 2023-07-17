import { AccessToken } from '../../../@types/global'
import { getAccessToken } from '../../accessToken'
import { auth } from './auth'

let fetchingToken: Promise<AccessToken> | null

export const fetchAccessToken = async (): Promise<string> => {
  const accessToken = getAccessToken()
  if (accessToken && accessToken.expiry > new Date().getTime() + 60 * 1000) {
    return `Basic ${Buffer.from(accessToken.accessToken)}`
  }

  if (fetchingToken) {
    await fetchingToken
    if (accessToken) return `Basic ${Buffer.from(accessToken.accessToken)}`
  }

  // eslint-disable-next-line require-atomic-updates
  fetchingToken = new Promise(async (resolve, reject) => {
    const [result, err] = await auth({ timeout: 3000 })

    if (!result || err) {
      reject(err?.error || 'AUTHENTICATION_FAILURE')
      fetchingToken = null
      return
    }
    resolve(result)
    fetchingToken = null
  })

  const result = await fetchingToken

  return `Basic ${Buffer.from(result.accessToken)}`
}
