import { AccessToken } from '../@types/global'

let accessToken: AccessToken | null
export const setAccessToken = (token: AccessToken) => (accessToken = token)
export const getAccessToken = () => accessToken
export const deleteAccessToken = () => (accessToken = null)
