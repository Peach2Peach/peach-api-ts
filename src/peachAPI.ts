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
import { PeachAPIHelpers, PeachAPIOptions, PublicPeachAPIHelpers } from './types'

export const peachAPI = (options: PeachAPIOptions) => {
  const apiOptions = options
  const publicHelpers: PublicPeachAPIHelpers = {
    getPublicHeaders: (url: string) => getPublicHeaders(url, options.userAgent),
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
    return undefined
  }

  const isAuthenticated = () => !!authToken?.accessToken

  const helpers = {
    ...publicHelpers,
    getPrivateHeaders: (url: string) => getPrivateHeaders(url, authToken?.accessToken || '', options.userAgent),
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

export class PeachAPI {
  options: PeachAPIOptions

  helpers: PeachAPIHelpers

  authToken: Awaited<ReturnType<ReturnType<typeof fetchAccessToken>>> | undefined

  clientServerTimeDifference = 0

  public: ReturnType<typeof peachAPIPublic>

  private: ReturnType<typeof peachAPIPrivate>

  constructor(options: PeachAPIOptions) {
    this.options = options
    this.helpers = {
      getPublicHeaders: (url: string) => getPublicHeaders(url, options.userAgent),
      getPrivateHeaders: (url: string) => getPrivateHeaders(url, this.authToken?.accessToken || '', options.userAgent),
    }
    this.public = peachAPIPublic(options, this.helpers)
    this.private = peachAPIPrivate(options, this.helpers)
    this.authenticate()
  }

  async adjustClientServerTimeDifference() {
    this.clientServerTimeDifference = await calculateClientServerTimeDifference(this.options, this.helpers)
  }

  setPeachAccount(peachAccount: BIP32Interface) {
    this.options.peachAccount = peachAccount
    this.private = peachAPIPrivate(this.options, this.helpers)
    this.public = peachAPIPublic(this.options, this.helpers)
  }

  async authenticate() {
    const message = getAuthenticationChallenge(this.clientServerTimeDifference)

    if (peachAccountSet(this.options)) {
      this.authToken = await fetchAccessToken(this.options, this.helpers)(message)
      if (!this.authToken) return undefined

      setTimeout(this.authenticate, this.authToken?.expiry - Date.now() - PREFETCH_ACCESS_TOKEN)
      return this.authToken
    }
    return undefined
  }

  isAuthenticated() {
    return !!this.authToken?.accessToken
  }
}
