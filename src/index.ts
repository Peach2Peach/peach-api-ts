import { fetchAccessToken } from './helpers/fetchAccessToken'
import { getAuthenticationChallenge } from './helpers/getAuthenticationChallenge'
import { getPrivateHeaders } from './helpers/getPrivateHeaders'
import { getPublicHeaders } from './helpers/getPublicHeaders'
import { peachAPIPrivate } from './private/peachAPIPrivate'
import { peachAPIPublic } from './public/peachAPIPublic'
import { PeachAPIOptions, PublicPeachAPIHelpers } from './types'
import { PREFETCH_ACCESS_TOKEN } from './constants'
import { calculateClientServerTimeDifference } from './helpers/calculateClientServerTimeDifference'

export const peachAPI = (options: PeachAPIOptions) => {
  const publicHelpers: PublicPeachAPIHelpers = {
    getPublicHeaders: (url: string) => getPublicHeaders(url),
  }
  let authToken: Awaited<ReturnType<ReturnType<typeof fetchAccessToken>>>
  let clientServerTimeDifference = 0

  const adjustClientServerTimeDifference = async () => {
    clientServerTimeDifference = await calculateClientServerTimeDifference(options, publicHelpers)
  }

  const authenticate = async () => {
    const message = getAuthenticationChallenge(clientServerTimeDifference)
    authToken = await fetchAccessToken(options, publicHelpers)(message)
    if (!authToken) return undefined

    setTimeout(authenticate, authToken?.expiry - Date.now() - PREFETCH_ACCESS_TOKEN)
    return authToken
  }
  const isAuthenticated = () => !!authToken?.accessToken

  const helpers = {
    ...publicHelpers,
    getPrivateHeaders: (url: string) => getPrivateHeaders(url, authToken?.accessToken || ''),
  }
  return {
    public: peachAPIPublic(options, helpers),
    private: peachAPIPrivate(options, helpers),
    authenticate,
    isAuthenticated,
    peachAccount: options.peachAccount,
    adjustClientServerTimeDifference,
  }
}

export default peachAPI
