import React from 'react'
import Header from '../../components/header'
import contactMainPic from '../../images/contact-main-image1.png'
import aboutPic1 from '../../images/about-image1.png'
import CustomIconns from '../../components/customIconns'

import {Box, Typography} from '@mui/material';

const Main = () => {
  return (
    <Box sx={{
        minHeight: '60vh',
        background: 'rgba(232, 236, 227, 0.33)',
        paddingTop: '2rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        fontFamily: 'Circular Std',
        backgroundImage: `url(${contactMainPic})`,
        backgroundRepeat: 'no-repeat',
        '@media (max-width: 639px)': {
            padding: 0,
            backgroundImage: 'none',
        }
    }}>
        <Header />
        <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '6rem'

            }}>
              <CustomIconns color='white'> <img src={aboutPic1} alt="" /> </CustomIconns>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                marginLeft: '3rem'

              }}>

                <Typography  sx={{
                    fontSize: '40px ',
                    fontWeight: 'bold',
                    color: '#404040'

                }}>
                    About Zikora Bank
                </Typography>

                <Typography sx={{color: '#5E5E5E', fontSize: '18px', marginTop: '0.8rem'}}>
                    Zikora is a people-first bank, serving communities in Nigeria by providing access to reliable digital banking services.
                </Typography>
              </Box>
            </Box>

    </Box>
  )
}

export default Main