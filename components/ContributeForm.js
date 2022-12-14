import React, { useState } from 'react'
import { useRouter } from 'next/router'
import web3 from '../contracts/web3.js'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import campaignInstance from '../contracts/campaign'

const ContributeFrom = ({ address }) => {
  const router = useRouter()
  const [contribution, setContribution] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setErrorMessage('')
    try {
      const accounts = await web3.eth.getAccounts()
      const campaign = await campaignInstance(address)
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contribution, 'ether'),
      })
      setContribution('')
      setLoading(false)
      router.reload()
      setSuccessMessage('You have successfully contributed to the campaign!')
    } catch (error) {
      setLoading(false)
      setErrorMessage(error.message)
    }
  }

  const onInputChange = (event) => {
    setContribution(event.target.value)
  }
  return (
    <Form
      style={styles.form}
      onSubmit={onSubmit}
      error={!!errorMessage}
      success={!!successMessage}
    >
      <Form.Field>
        <label>Enter Amount To Contribute</label>
        <Input
          placeholder="Enter Amount"
          label="Ether"
          labelPosition="right"
          type="number"
          value={contribution}
          onChange={onInputChange}
        />
      </Form.Field>
      <Message error header="Oops!" content={errorMessage} />
      <Message success header="Success!" content={successMessage} />
      <Button type="submit" primary loading={loading}>
        Contribute
      </Button>
    </Form>
  )
}

const styles = {
  form: {
    width: '80%',
  },
}

export default ContributeFrom
