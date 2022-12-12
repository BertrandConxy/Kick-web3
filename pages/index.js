import React, { useEffect, useState } from 'react'
import instance from '../contracts/factory.js'

const Home = ({ deployedCampaigns }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Deployed Campaigns</p>
      <p>{deployedCampaigns[0]}</p>
    </div>
  )
}

Home.getInitialProps = async () => {
  const deployedCampaigns = await instance.methods.getDeployedCampaigns().call()
  return { deployedCampaigns }
}

export default Home
