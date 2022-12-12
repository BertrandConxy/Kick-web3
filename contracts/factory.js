import web3 from "./web3";

const compiledFactory = require('./artifacts/CampaignFactory.json')

const instance = new web3.eth.Contract(
    compiledFactory.abi,
    "0xa0Fc72974279284f09Bd9FdE74120cA79fA797f5"
);
export default instance;