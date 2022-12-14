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
    mapping (uint => Request) public requests;
    uint private numRequests;
    uint private numApprovers;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint minimum, address creator) {
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        numApprovers++;
    }

    function createRequest(string memory _description, uint _value, address _recipient)
        public restricted {
            Request storage _r = requests[numRequests++];
            _r.description = _description;
            _r.value = _value;
            _r.recipient = _recipient;
            _r.complete = false;
            _r.approvalCount = 0;
        }

    function approveRequest(uint _index) public {
        Request storage _request = requests[_index];
        require(approvers[msg.sender]);
        require(!_request.approvals[msg.sender]);
        _request.approvals[msg.sender] = true;
        _request.approvalCount++;
    }

    function finalizeRequest(uint _index) public restricted {
        Request storage _request = requests[_index];
        require(_request.approvalCount > (numApprovers / 2));
        require(!_request.complete);
        address _recipient = payable(_request.recipient);
        _request.complete = true;
        (bool sent,) = _recipient.call{value: address(this).balance} ("");
        require(sent, "Ether not sent");
    }

    function getSummary() public view returns (uint,uint, uint, uint, address) {
        return (
            minimumContribution,
            address(this).balance,
            numRequests,
            numApprovers,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return numRequests;
    }

}
