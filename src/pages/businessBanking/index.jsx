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
    <div>
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
    </div>
  )
}

export default Index