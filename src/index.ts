import { BIP32Interface } from 'bip32'
import { PREFETCH_ACCESS_TOKEN } from './constants'
import { calculateClientServerTimeDifference } from './helpers/calculateClientServerTimeDifference'
import { fetchAccessToken } from './helpers/fetchAccessToken'
import { getAuthenticationChallenge } from './helpers/getAuthenticationChallenge'
import { getPrivateHeaders } from './helpers/getPrivateHeaders'
import { getPublicHeaders } from './helpers/getPublicHeaders'
import { peachAccountSet } from './helpers/peachAccountSet'
import { peachAPIPrivate } from './private/peachAPIPrivate'
import { peachAPIPublic } from './public/peachAPIPublic'
import { PeachAPIOptions, PublicPeachAPIHelpers } from './types'

export const peachAPI = (options: PeachAPIOptions) => {
  const apiOptions = options
  const publicHelpers: PublicPeachAPIHelpers = {
    getPublicHeaders: (url: string) => getPublicHeaders(url),
  }
  let authToken: Awaited<ReturnType<ReturnType<typeof fetchAccessToken>>>
  let clientServerTimeDifference = 0

  const adjustClientServerTimeDifference = async () => {
    clientServerTimeDifference = await calculateClientServerTimeDifference(apiOptions, publicHelpers)
  }

  const setPeachAccount = (peachAccount: BIP32Interface) => (apiOptions.peachAccount = peachAccount)

  const authenticate = async () => {
    const message = getAuthenticationChallenge(clientServerTimeDifference)

    if (peachAccountSet(apiOptions)) {
      authToken = await fetchAccessToken(apiOptions, publicHelpers)(message)
      if (!authToken) return undefined

      setTimeout(authenticate, authToken?.expiry - Date.now() - PREFETCH_ACCESS_TOKEN)
      return authToken
    }
    throw Error('Missing peach account')
  }

  const isAuthenticated = () => !!authToken?.accessToken

  const helpers = {
    ...publicHelpers,
    getPrivateHeaders: (url: string) => getPrivateHeaders(url, authToken?.accessToken || ''),
  }

  return {
    public: peachAPIPublic(apiOptions, helpers),
    private: peachAPIPrivate(apiOptions, helpers),
    authenticate,
    setPeachAccount,
    isAuthenticated,
    apiOptions,
    adjustClientServerTimeDifference,
  }
}

export default peachAPI
