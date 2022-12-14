import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link.js'
import instance from '../contracts/factory.js'
import { Card, Button, Grid, Container } from 'semantic-ui-react'
import Layout from '../components/Layout.js'

const Home = ({ deployedCampaigns }) => {
  const router = useRouter()
  return (
    <Layout>
      <div style={styles.container}>
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <h3>Open Campaigns</h3>
              </Grid.Column>
              <Grid.Column>
                <Link href="/campaigns/new">
                  <Button
                    floated="right"
                    content="Create Campaign"
                    icon="add circle"
                    primary
                  />
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {deployedCampaigns.length === 0 ? (
            <h4>No campaigns available yet</h4>
          ) : (
            <Card.Group>
              {deployedCampaigns.map((address) => {
                return (
                  <Card key={address}>
                    <Card.Content>
                      <Card.Header style={styles.wrap}>{address}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <Link href={`/campaigns/${address}`}>
                        <Button primary>View Campaign</Button>
                      </Link>
                    </Card.Content>
                  </Card>
                )
              })}
            </Card.Group>
          )}
        </Container>
      </div>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const deployedCampaigns = await instance.methods.getDeployedCampaigns().call()
  return { deployedCampaigns }
}

const styles = {
  container: {
    marginTop: '50px',
  },

  wrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}

export default Home
