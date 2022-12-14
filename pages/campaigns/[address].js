import React from 'react'
import Layout from '../../components/Layout'
import ContributeFrom from '../../components/ContributeForm'
import campaignInstance from '../../contracts/campaign'

import { Card, Form, Grid, Button, Input, Message } from 'semantic-ui-react'

const ShowCampaign = ({
  address,
  minimumContribution,
  balance,
  requestsCount,
  approversCount,
  manager,
}) => {
  return (
    <Layout>
      <h1>Campaign: {address}</h1>
      <Grid columns={2}>
        <Grid.Row columns="equal" centered>
          <Grid.Column>
            {' '}
            <h2>Campaign Details</h2>
          </Grid.Column>
          <Grid.Column>
            <h2>Contribute To Campaign</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="justified">
          <Grid.Column>
            <Grid columns={2} stretched>
              <Grid.Row>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Campaign Manager</Card.Header>
                      <Card.Meta style={styles.wrap}>{manager}</Card.Meta>
                      <Card.Description>
                        The manager created this campaign and can create
                        Requests
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>{balance} Wei</Card.Meta>
                      <Card.Description>
                        The balance is how much money this campaign has left to
                        spend
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Minimum Contribution</Card.Header>
                      <Card.Meta>{minimumContribution} Wei</Card.Meta>
                      <Card.Description>
                        You must contribute at least this much wei to become an
                        approver
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Number of Requests</Card.Header>
                      <Card.Meta>{requestsCount}</Card.Meta>
                      <Card.Description>
                        A request tries to withdraw money from the contract.
                        request must be approved by approvers
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Number of Approvers</Card.Header>
                      <Card.Meta>{approversCount}</Card.Meta>
                      <Card.Description>
                        Number of people who have already donated to this
                        campaign
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column floated="right">
            <ContributeFrom address={address} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  )
}

const styles = {
  card: {
    margin: '10px 0',
  },
  wrap: {
    whiteSpace: 'nowrap',
    fontSize: '10px',
  },

  gap: {
    gap: '10px',
  },
}

ShowCampaign.getInitialProps = async (props) => {
  const { address } = props.query
  const campaign = campaignInstance(address)
  const summary = await campaign.methods.getSummary().call()
  return {
    address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  }
}

export default ShowCampaign
