import React from 'react'
import Main from './main'
import Paragraph from './paragraph'
import Footer from '../../../components/footer'
import { Divider, Box } from '@mui/material'

const index = () => {
  return (
    <div>
        <Main />
        <Paragraph />
        <Box className='w-[90vw] m-[auto] mt-[6rem] mb-[6rem]'>
        <Divider />

        </Box>
        <Footer />
    </div>
  )
}

export default index