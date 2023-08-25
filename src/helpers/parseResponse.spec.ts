import { parseResponse } from './parseResponse'

describe('parseResponse', () => {
  it('should parse a successful API JSON response', async () => {
    const apiResponse = { success: true, date: new Date('2022-02-14T12:00:00.000Z') }
    const response = new Response(JSON.stringify(apiResponse), { status: 200 })
    const parsedResponse = await parseResponse(response)
    expect(parsedResponse.getValue()).toEqual(apiResponse)
  })
  it('should parse a successful API string response', async () => {
    const apiResponse = 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'
    const response = new Response(apiResponse, { status: 200 })
    const parsedResponse = await parseResponse(response, true)
    expect(parsedResponse.getValue()).toEqual(apiResponse)
  })
  it('should handle aborted requests', async () => {
    const response = new Response(undefined, { statusText: 'Aborted' })
    const parsedResponse = await parseResponse(response)
    expect(parsedResponse.getError()).toEqual({ error: 'ABORTED' })
  })
  it('should handle requests with error status', async () => {
    const response = new Response(undefined, { status: 500 })
    const parsedResponse = await parseResponse(response)
    expect(parsedResponse.getError()).toEqual({ error: 'INTERNAL_SERVER_ERROR' })
  })
  it('should parse api response that are not status 200', async () => {
    const apiResponse = { success: false }
    const response = new Response(JSON.stringify(apiResponse), { status: 301 })
    const parsedResponse = await parseResponse(response)
    expect(parsedResponse.getError()).toEqual(apiResponse)
  })
  it('should handle malformed JSON', async () => {
    const response = new Response('{malfor', { status: 200 })
    const parsedResponse = await parseResponse(response)
    expect(parsedResponse.getError()).toEqual({ error: 'INTERNAL_SERVER_ERROR' })
  })
})
