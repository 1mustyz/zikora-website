import React from 'react'
import Main from './main'
import CompleteBanking from './complete-banking'
import GreenCard from './greenCard'
import Offers from './offers'
import Footer from '../../../components/footer'

const Index = () => {
  return (
    <div>
        <Main />
        <CompleteBanking />
        <GreenCard />
        <Offers />
        <Footer />
    </div>
  )
}

export default Index