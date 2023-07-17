import { crypto } from 'bitcoinjs-lib'
import { auth } from '../private/user/auth'
import { PublicPeachAPIHelpers, PeachAPIOptions } from '../types'

export const fetchAccessToken = async (options: PeachAPIOptions, helpers: PublicPeachAPIHelpers) => {
  const message = helpers.getAuthenticationChallenge()

  const authResult = await auth(
    options,
    helpers,
  )({
    publicKey: options.peachAccount.publicKey.toString('hex'),
    message,
    signature: options.peachAccount.sign(crypto.sha256(Buffer.from(message))).toString('hex'),
    uniqueId: options.uniqueId,
    timeout: 3000,
  })

  if (!authResult.isOk()) return undefined

  return {
    accessToken: `Basic ${Buffer.from(authResult.getValue().accessToken)}`,
    expiry: authResult.getValue().expiry,
  }
}
