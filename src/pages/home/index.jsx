import React from 'react'
import HomeMain from './main'
import GreenCard from './greenCard'
import LoansEmpower from './loans'
import Channels from './channels'
import Account from './accounts'
import DownloadApp from './downloadApp'
import Footer from '../../components/footer'
import Box from '@mui/material/Box'

const IndexHome = () => {
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
        <HomeMain />
        <GreenCard />
        <LoansEmpower />
        <Channels />
        <Account />
        <DownloadApp />
        <Footer />
    </Box>
  )
}

export default IndexHome