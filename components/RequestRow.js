import React, { useState } from 'react'
import { Table, Label, Button } from 'semantic-ui-react'
import web3 from '../contracts/web3'
import campaignInstance from '../contracts/campaign'

const RequestRow = ({ id, request, address, count }) => {
  const { description, value, recipient, approvalCount } = request
  const [ApproveLoading, setApproveLoading] = useState(false)
  const onApprove = async () => {
    setApproveLoading(true)
    try {
      const accounts = await web3.eth.getAccounts()
      const campaign = await campaignInstance(address)
      await campaign.methods.approveRequest(id).send({
        from: accounts[0],
      })
      setApproveLoading(false)
    } catch (error) {
      setApproveLoading(false)
      console.log(error)
    }
  }
  return (
    <Table.Row>
      <Table.Cell>
        <Label ribbon>{id}</Label>
      </Table.Cell>
      <Table.Cell>{description}</Table.Cell>
      <Table.Cell>{value}</Table.Cell>
      <Table.Cell>{recipient}</Table.Cell>
      <Table.Cell>
        {approvalCount}/{count}
      </Table.Cell>
      <Table.Cell>
        <Button
          color="green"
          basic
          onClick={onApprove}
          loading={ApproveLoading}
        >
          Approve
        </Button>
      </Table.Cell>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  )
}

export default RequestRow
