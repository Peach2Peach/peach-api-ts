import { Currency, MeetupCountries } from './global'

export type BitcoinEvent = {
  id: string
  featured: boolean
  superFeatured?: boolean
  currencies: Currency[]
  country: MeetupCountries
  city: string
  shortName: string
  longName: string
  url?: string
  address?: string
  frequency?: string
  logo?: string // path to the logo
}
