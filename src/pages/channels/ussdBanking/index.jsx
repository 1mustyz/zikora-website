import React from 'react'
import Main from './main'
import ActivateUssd from './activateUssd'
import Footer from '../../../components/footer'
import AccountBalance from './accountBalance'

const Index = () => {
  return (
    <div>
        <Main />
        <ActivateUssd />
        <AccountBalance />
        <Footer />
    </div>
  )
}

export default Index