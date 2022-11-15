// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    mapping (uint => Request) requests;
    uint numRequests;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint minimum) {
        manager = msg.sender;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
    }

    function createRequest(string memory _description, uint _value, address _recipient)
        public restricted {
            Request storage r = requests[numRequests++];
            r.description = _description;
            r.value = _value;
            r.recipient = _recipient;
            r.complete = false;
            r.approvalCount = 0;
        }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

}
