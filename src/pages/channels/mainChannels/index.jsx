import React from 'react'
import Main from './main'
import MobileBanking from './mobile-banking'
import GreenCard from './greenCard'
import Card from './card'
import Footer from '../../../components/footer'
import {Box, Divider} from '@mui/material'

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
        <MobileBanking/>
        <GreenCard />
        <Card />
        <Box className='flex  flex-row justify-center mb-[6rem] sm:mb-[0]'>
          <Divider className='w-[85%] ml-[1rem] sm:hidden'/>
        </Box>
          <Footer />
    </Box>
  )
}

export default Index