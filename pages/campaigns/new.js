import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout.js'
import { Button, Form, Input, Message, Loader } from 'semantic-ui-react'
import instance from '../../contracts/factory.js'
import web3 from '../../contracts/web3.js'

const NewCampaign = () => {
  const router = useRouter()
  const [minimumContribution, setMinimumContribution] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setErrorMessage('')
    try {
      const accounts = await web3.eth.getAccounts()
      await instance.methods.createCampaign(minimumContribution).send({
        from: accounts[0],
      })
      setMinimumContribution('')
      setLoading(false)
      router.push('/')
    } catch (error) {
      setLoading(false)
      console.log(error)
      setErrorMessage(error.message)
    }
  }

  const onInputChange = (event) => {
    setMinimumContribution(event.target.value)
  }
  return (
    <Layout>
      <h1>New Campaign</h1>
      <Form style={styles.form} onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            placeholder="Enter Amount"
            label="Wei"
            labelPosition="right"
            type="number"
            value={minimumContribution}
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
    width: '40%',
  },
}

export default NewCampaign
