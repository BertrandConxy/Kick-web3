// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import './campaign.sol';

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint _minimum) public {
        address newCampaign = address(new Campaign(_minimum, msg.sender));
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}