import React from 'react'
import Main from './main'
import Footer from '../../components/footer'
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
        <Main/>
        <div className='mt-[8rem]'>

        <Footer />
        </div>
    </Box>
  )
}

export default Index