require("dotenv").config();
import web3 from "./web3";
import CampaignFactory from "./artifacts/CampaignFactory.json";

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    process.env.FACTORY_ADDRESS
);

export default instance;