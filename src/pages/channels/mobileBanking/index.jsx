import React from 'react'
import Main from './main'
import CompleteBanking from './complete-banking'
import Offers from './offers'
import Footer from '../../../components/footer'
// import {Box, Divider} from '@mui/material'

const Index = () => {
  return (
    <div>
        <Main />
        <CompleteBanking />
        <Offers />
        <Footer />
    </div>
  )
}

export default Index