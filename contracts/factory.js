import web3 from './web3'

const compiledFactory = require('./artifacts/CampaignFactory.json')

const instance = new web3.eth.Contract(
  compiledFactory.abi,
  '0x2e69327C5f848289D8dBe592840176Ef5c8B877A',
)
export default instance
