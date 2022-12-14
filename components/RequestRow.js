import React from 'react'
import { Table, Label } from 'semantic-ui-react'
import web3 from '../contracts/web3'

const RequestRow = ({ id, request, address }) => {
  const { description, value, recipient, approvalCount } = request
  return (
    <Table.Row>
      <Table.Cell>
        <Label ribbon>{id}</Label>
      </Table.Cell>
      <Table.Cell>{description}</Table.Cell>
      <Table.Cell>{value}</Table.Cell>
      <Table.Cell>{recipient}</Table.Cell>
      <Table.Cell>{approvalCount}</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  )
}

export default RequestRow
