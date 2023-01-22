import React from 'react'
import {Box} from '@mui/material'
import Main from './main'
import SwitchAccount from './switch'

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
        <SwitchAccount />
    </Box>
  )
}

export default Index