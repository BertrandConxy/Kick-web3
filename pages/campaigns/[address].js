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
        <Grid.Row columns="equal" centered>
          <Grid.Column>
            {' '}
            <h2>Campaign Details</h2>
          </Grid.Column>
          <Grid.Column>
            <h2>Contribute To Campaign</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="justified" columns="equal">
          <Grid.Column>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
                    <Card.Content>
                      <Card.Header>Campaign Balance</Card.Header>
                      <Card.Meta>Balance</Card.Meta>
                      <Card.Description>Balance</Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Card style={styles.card}>
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
          <Grid.Column floated="right">
            <ContributeFrom />
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
}

export default ShowCampaign
