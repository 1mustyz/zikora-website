import React from 'react'
import Main from './main'
import Paragraph from './paragraph'
import Footer from '../../../components/footer'
import { Divider, Box } from '@mui/material'

const index = () => {
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
        <Paragraph />
        <Box className='w-[90vw] max-w-[100%] m-[auto] mt-[6rem] sm:mt-[2rem] mb-[6rem] sm:mb-[3rem]'>
        <Divider />

        </Box>
        <Footer />
    </Box>
  )
}

export default index