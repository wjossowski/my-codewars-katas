import { extractKataId, fetchKata } from './KataFetcher'

describe('KataFetcher', () => {
  it('exports kata #1', () => {
    const url = 'https://www.codewars.com/kata/5f77d62851f6bc0033616bd8'
    expect(extractKataId(url)).toEqual('5f77d62851f6bc0033616bd8')
  })

  it('exports kata #2', () => {
    const url = 'https://www.codewars.com/kata/5a5015a7145c467bd50000a5/train/python'
    expect(extractKataId(url)).toEqual('5a5015a7145c467bd50000a5')
  })

  it('runs through web', async () => {
    const kata = await fetchKata('https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/python')

    expect(kata.description).not.toBeNull()
    expect(kata.name).not.toBeNull()
    expect(kata.languages).not.toBeNull()
    expect(kata.slug).not.toBeNull()
  })
})
