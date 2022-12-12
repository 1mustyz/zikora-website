import React from 'react'
import {Box} from '@mui/material'
import Main from './main'
import CurrentAccount from './currentAccount'
import ShowCase from './showcase'
import FixedDeposit from './fixedDeposit'
import Footer from '../../components/footer'

const Index = () => {
  return (
    <Box>
        <Main />
        <CurrentAccount />
        <ShowCase />
        <FixedDeposit />
        <Footer />
    </Box>
  )
}

export default Index