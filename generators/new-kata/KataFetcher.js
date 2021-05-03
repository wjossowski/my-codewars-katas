const { Kata } = require('./Kata')
const axios = require('axios')

const fetchKata = async url => {
  const kataId = extractKataId(url)
  const response = await axios(kataUrl(kataId))
  return new Kata(response.data)
}

const extractKataId = url => {
  const result = url.match(/\/kata\/(?<kataId>\b[\w=.]+)/)
  return result.groups.kataId
}

const kataUrl = kataId => `https://www.codewars.com/api/v1/code-challenges/${kataId}`

module.exports = {
  fetchKata,
  extractKataId,
}
