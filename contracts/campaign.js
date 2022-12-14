import web3 from './web3'

const compiledCampaign = require('./artifacts/Campaign.json')

const campaignInstance = (address) => {
  return new web3.eth.Contract(compiledCampaign.abi, address)
}

export default campaignInstance
