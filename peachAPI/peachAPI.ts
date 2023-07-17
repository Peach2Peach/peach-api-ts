import { fetchAccessToken } from './helpers/fetchAccessToken'
import { getAuthenticationChallenge } from './helpers/getAuthenticationChallenge'
import { getPrivateHeaders } from './helpers/getPrivateHeaders'
import { getPublicHeaders } from './helpers/getPublicHeaders'
import { peachAPIPrivate } from './private/peachAPIPrivate'
import { peachAPIPublic } from './public/peachAPIPublic'
import { PeachAPIOptions, PublicPeachAPIHelpers } from './types'

export const peachAPI = (options: PeachAPIOptions) => {
  const publicHelpers: PublicPeachAPIHelpers = {
    getPublicHeaders: (url: string) => getPublicHeaders(url),
    getAuthenticationChallenge,
  }
  let authenticated = false
  let authToken: Awaited<ReturnType<typeof fetchAccessToken>>

  const authenticate = async () => {
    authToken = await fetchAccessToken(options, publicHelpers)
    authenticated = !!authToken?.accessToken
  }

  const helpers = {
    ...publicHelpers,
    getPrivateHeaders: (url: string) => getPrivateHeaders(url, authToken?.accessToken || ''),
  }
  return {
    public: peachAPIPublic(options, helpers),
    private: peachAPIPrivate(options, helpers),
    authenticate,
    authenticated,
    peachAccount: options.peachAccount,
  }
}
