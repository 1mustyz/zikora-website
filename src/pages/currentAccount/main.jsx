import React from 'react'
import Header from '../../components/header'
import contactMainPic from '../../images/contact-main-image1.png'
import accountPic2 from '../../images/sub-account-image2.png'
import CustomIconns from '../../components/customIconns'

import {Box} from '@mui/material';

const Main = () => {
  return (
    <Box sx={{
        paddingBottom: '6rem',
        maxHeight: '60vh',
        background: 'rgba(232, 236, 227, 0.33)',
        paddingTop: '2rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        fontFamily: 'Circular Std',
        backgroundImage: `url(${contactMainPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        '@media (max-width: 639px)': {
          padding: 0,
          backgroundImage: `url(${contactMainPic})`,
          minHeight: '47vh',
      }
    }}>
        <Header />
        <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '6rem',
              '@media (max-width: 639px)': {
                marginTop: '3rem',
                margin: '3rem 1rem 0 1rem',
                alignItems: 'center'
             }

            }}>
              <CustomIconns color='white'> 
              <Box sx={{
                  backgroundImage: `url(${accountPic2})`,
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%',
                  backgroundPosition: 'center',
                  '@media (max-width: 639px)': {
                    backgroundSize: '1.5rem'
                 }
                }}>

                </Box>
              </CustomIconns>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                marginLeft: '3rem',
                '@media (max-width: 639px)': {
                  width: '78%',
                  marginLeft: '1rem',
                   
               }

              }}>

                <p  className='text-[38px] font-[700]  text-[#404040] sm:text-[24px]'>
                    Current Accounts
                </p>

                <p className='text-[16px] text-[#5E5E5E] sm:text-[14px] mt-[0.8rem]'>                                                                                                                                                                         
                    We provide different current accounts to give you access to overdraft facilities and customer finance for urgent business needs. 
                </p>
              </Box>
            </Box>

    </Box>
  )
}

export default Main