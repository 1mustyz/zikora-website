import React from 'react'
import Main from './main'
import {Box} from '@mui/material';
import Mission from './mission';
import ShowCase from './showcase';
import DownloadApp from '../home/downloadApp';
import Footer from '../../components/footer';


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
        <Main />
        <Mission />
        <ShowCase />
        <DownloadApp />
        <Footer/>
    </Box>
  )
}

export default Index