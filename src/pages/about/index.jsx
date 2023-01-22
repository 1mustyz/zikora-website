import React from 'react'
import Main from './main'
import Mission from './mission'
import ShowCase from './showcase'
import Directors from './directors'
import Footer from '../../components/footer'
import Box from '@mui/material/Box'

const Index = () => {
  return (
    <Box sx={{
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
        <Mission />
        <ShowCase />
        <Directors />
        <Footer />
    </Box>
  )
}

export default Index