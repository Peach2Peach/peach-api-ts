import { peachAPIPrivate } from './private/peachAPIPrivate'
import { peachAPIPublic } from './public/peachAPIPublic'
import { PeachAPIOptions } from './types'

export const peachAPI = (options: PeachAPIOptions) => ({
  ...peachAPIPrivate(options),
  ...peachAPIPublic(options),
})
