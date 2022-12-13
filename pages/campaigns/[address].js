import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ContributeFrom from '../../components/ContributeForm'
import instance from '../../contracts/factory'

import { Card, Form, Grid, Button, Input, Message } from 'semantic-ui-react'

const ShowCampaign = () => {
  const router = useRouter()
  const { address } = router.query
  return (
    <Layout>
      <h1>Campaign: {address}</h1>
      <Grid columns={2} padded={'vertically'}>
        <Grid.Row>
          <Grid.Column>Campaign Details</Grid.Column>
          <Grid.Column>Contribute To Campaign</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <ContributeFrom />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  )
}

export default ShowCampaign
