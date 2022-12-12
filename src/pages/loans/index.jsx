import React from 'react'
import Main from './main'
import {Box} from '@mui/material';
import Mission from './mission';
import ShowCase from './showcase';
import DownloadApp from '../home/downloadApp';
import Footer from '../../components/footer';


const Index = () => {
  return (
    <Box>
        <Main />
        <Mission />
        <ShowCase />
        <DownloadApp />
        <Footer/>
    </Box>
  )
}

export default Index