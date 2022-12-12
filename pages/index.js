import React from 'react'
import instance from '../contracts/factory.js'
import 'semantic-ui-css/semantic.min.css'
import { Card, Button, Icon, Grid, Container } from 'semantic-ui-react'
import Navigation from '../components/Navigation.js'

const Home = ({ deployedCampaigns }) => {
  return (
    <>
      <Navigation />
      <div style={styles.container}>
        <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <h3>Open Campaigns</h3>
              </Grid.Column>
              <Grid.Column>
                <Button
                  floated="right"
                  content="Create Campaign"
                  icon="add circle"
                  primary
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Card.Group>
            {deployedCampaigns.map((address) => {
              return (
                <Card key={address}>
                  <Card.Content>
                    <Card.Header style={styles.wrap}>{address}</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Button primary>View Campaign</Button>
                  </Card.Content>
                </Card>
              )
            })}
          </Card.Group>
        </Container>
      </div>
    </>
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
