import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import campaignInstance from '../../../../contracts/campaign'
import web3 from '../../../../contracts/web3'

const NewCampaign = () => {
  const router = useRouter()
  const { address } = router.query
  const [request, setRequest] = useState({
    description: '',
    amount: '',
    recipient: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setErrorMessage('')
    try {
      const accounts = await web3.eth.getAccounts()
      const campaign = await campaignInstance(address)
      await campaign.methods
        .createRequest(request.description, request.amount, request.recipient)
        .send({
          from: accounts[0],
        })
      setRequest({
        description: '',
        amount: '',
        recipient: '',
      })
      setLoading(false)
      console.log('request created')
      router.push(`/`)
    } catch (error) {
      setLoading(false)
      setErrorMessage(error.message)
    }
  }

  const onInputChange = (e) => {
    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Layout>
      <h1>New Request</h1>
      <Form style={styles.form} onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Request Description</label>
          <Input
            placeholder="Enter short description"
            type="text"
            name="description"
            value={request.description}
            onChange={onInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Amount To Send</label>
          <Input
            placeholder="Enter amount"
            label="wei"
            labelPosition="right"
            type="number"
            name="amount"
            value={request.amount}
            onChange={onInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Recipient</label>
          <Input
            placeholder="Enter recipient address"
            type=""
            name="recipient"
            value={request.recipient}
            onChange={onInputChange}
          />
        </Form.Field>
        <Message error header="Oops!" content={errorMessage} />
        <Button type="submit" primary loading={loading}>
          Create!
        </Button>
      </Form>
    </Layout>
  )
}

const styles = {
  form: {
    width: '80%',
  },
}

export default NewCampaign
