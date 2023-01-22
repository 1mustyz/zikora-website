import React from 'react'
import Main from './main'
import GreenCard from './greenCard'
import ShowCase from './showcase'
import StartWith from './startWith'
import Solution from './solution'
import Customers from './customers'
import Footer from '../../components/footer'
import DownloadApp from '../home/downloadApp'
import bg from '../../images/about-image3.png'
import {Box} from '@mui/material'
const Index = () => {
  return (
    <Box  sx={{
      '@media (min-width: 1700px)': {
          backgroundSize: '100%',
          maxWidth: '70vw',
          margin: 'auto',
        },
        '@media (min-width: 1600px) and (max-width: 1800px)': {
          backgroundSize: '100%',
          maxWidth: '90vw',
          margin: 'auto',
          // maxWidth: '1500px'

        },
   }}>
        <Main />
        <GreenCard />
        <ShowCase />
        <StartWith />
        <Solution />
        <Customers />
        <Box sx={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat'}}>
          <DownloadApp />

        </Box>
        <Footer />
    </Box>
  )
}

export default Index