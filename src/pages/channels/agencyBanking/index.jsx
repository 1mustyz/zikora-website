import React from 'react'
import Main from './main'
import CompleteBanking from './complete-banking'
import GreenCard from './greenCard'
import Offers from './offers'
import Footer from '../../../components/footer'
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
        <CompleteBanking />
        <GreenCard />
        <Offers />
        <Footer />
    </Box>
  )
}

export default Index