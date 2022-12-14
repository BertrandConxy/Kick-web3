import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../../components/Layout'
import { Grid, Container, Button, Label, Table } from 'semantic-ui-react'
import campaignInstance from '../../../../contracts/campaign'

const CampaignRequests = ({ address, requests, requestsCount }) => {
  return (
    <Layout>
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <h3>Pending Requests</h3>
            </Grid.Column>
            <Grid.Column>
              <Link href={`/campaigns/${address}/requests/new`}>
                <Button
                  floated="right"
                  content="Create Request"
                  icon="add circle"
                  primary
                />
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Recipient</Table.HeaderCell>
              <Table.HeaderCell>Approval Count</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {requests.map((request) => {
              return (
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>First</Label>
                  </Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="7">
                <h2>End</h2>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    </Layout>
  )
}

CampaignRequests.getInitialProps = async (props) => {
  const { address } = props.query
  const campaign = campaignInstance(address)
  const requestsCount = await campaign.methods.getRequestsCount().call()

  const requests = await Promise.all(
    Array(requestsCount)
      .fill()
      .map((_, index) => {
        return campaign.methods.requests(index).call()
      }),
  )
  return {
    address,
    requests,
    requestsCount,
  }
}

export default CampaignRequests
