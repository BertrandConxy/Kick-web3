import React, { useState } from 'react'
import { Table, Label, Button } from 'semantic-ui-react'
import web3 from '../contracts/web3'
import campaignInstance from '../contracts/campaign'

const RequestRow = ({ id, request, address, count }) => {
  const { description, value, recipient, approvalCount, complete } = request
  const [ApproveLoading, setApproveLoading] = useState(false)
  const [FinalizeLoading, setFinalizeLoading] = useState(false)
  const readyToFinalize = approvalCount > count / 2
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
  const onFinalize = async () => {
    setFinalizeLoading(true)
    try {
      const accounts = await web3.eth.getAccounts()
      const campaign = await campaignInstance(address)
      await campaign.methods.finalizeRequest(id).send({
        from: accounts[0],
      })
      setFinalizeLoading(false)
    } catch (error) {
      setFinalizeLoading(false)
      console.log(error)
    }
  }
  return (
    <Table.Row disabled={complete} positive={readyToFinalize && !complete}>
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
        {complete ? null : (
          <Button
            color="green"
            basic
            onClick={onApprove}
            loading={ApproveLoading}
          >
            Approve
          </Button>
        )}
      </Table.Cell>
      <Table.Cell>
        {complete ? null : (
          <Button color="teal" onClick={onFinalize} loading={FinalizeLoading}>
            Finalize
          </Button>
        )}
      </Table.Cell>
    </Table.Row>
  )
}

export default RequestRow
