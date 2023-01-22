import React from 'react'
import Main from './main'
import ActivateUssd from './activateUssd'
import Footer from '../../../components/footer'
import AccountBalance from './accountBalance'
import Box from '@mui/material/Box'

const Index = () => {
  return (
    <Box  sx={{
      '@media (min-width: 1700px)': {
          backgroundSize: '100%',
          maxWidth: '70vw',
          margin: 'auto'

       },
       '@media (min-width: 1600px) and (max-width: 1800px)': {
           backgroundSize: '100%',
           maxWidth: '90vw',
           margin: 'auto'

        },
   }}>
        <Main />
        <ActivateUssd />
        <AccountBalance />
        <Footer />
    </Box>
  )
}

export default Index