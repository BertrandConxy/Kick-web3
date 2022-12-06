const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3') // constructor function
const web3 = new Web3(ganache.provider()) // instance of web3

const compiledFactory = require('../contracts/artifacts/CampaignFactory.json')
const compiledCampaign = require('../contracts/artifacts/Campaign.json')

let accounts
let factory
let campaign
let campaignAddress

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.data.bytecode.object,
    })
    .send({
      from: accounts[0],
      gas: '2000000',
    })

  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000',
  })
  ;[campaignAddress] = await factory.methods.getDeployedCampaigns().call()
  campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress)
})

describe('Campaigns', () => {
  it('deploys a campaign and a factory', () => {
    assert.ok(factory.options.address)
    assert.ok(campaign.options.address)
  })
})
