import React from 'react'
import ContactMain from './main'
import Box from '@mui/material/Box'
const IndexContact = () => {
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
        <ContactMain />
    </Box>
  )
}

export default IndexContact