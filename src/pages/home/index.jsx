import React from 'react'
import HomeMain from './main'
import GreenCard from './greenCard'
import LoansEmpower from './loans'
import Channels from './channels'
import Account from './accounts'
import DownloadApp from './downloadApp'
import Footer from '../../components/footer'

const IndexHome = () => {
  return (
    <div>
        <HomeMain />
        <GreenCard />
        <LoansEmpower />
        <Channels />
        <Account />
        <DownloadApp />
        <Footer />
    </div>
  )
}

export default IndexHome