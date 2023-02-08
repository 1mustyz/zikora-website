import React from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import homeMainBg from '../../images/home-main-bg.png'
import homeMainFrame from '../../images/image 1.png'
import homeMainBgSmall from '../../small-images/sm:home-main.png'
import {FaAppStoreIos,FaGooglePlay} from 'react-icons/fa'
import { Typography } from '@mui/material'
import ButtonM from '@mui/material/Button'

import Box from '@mui/material/Box';


const HomeMain = () => {
  return (
    <Box sx={{
        maxHeight: '130vh',
        background: 'rgba(232, 236, 227, 0.33)',
        paddingTop: '2rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        fontFamily: 'Circular Std',
        backgroundImage: `url(${homeMainBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        '@media (max-width: 639px)': {
            padding: 0,
            backgroundImage: `url(${homeMainBgSmall})`,
                    

        },
       

    }}>
        <Header />

        <div className='flex flex-row mt-5  justify-between sm:flex-col sm:px-[1.2rem] '>
            {/* left */}
            <div className='mt-20 sm:mt-[1rem] w-1/2 flex flex-col h-full sm:w-full ' >
                <Box  className='text-6xl sm:text-[34px] font-bold h-5/6 sm:h-[7rem]  flex flex-col justify-between  opacity-75'>
                    <p className='sm:p-[0rem] sm:m-[0rem]'>Stress free</p>
                    <p className='pt-2 sm:p-[0rem] sm:m-[0rem]'>Banking, at your</p>
                    <p className='pt-2 sm:p-[0rem] sm:m-[0rem]'>Fingertips</p>
                </Box>
                <Box className='mt-10 sm:mt-[1.2rem] leading-1 text-xl sm:text-[14px] opacity-75'>Zikora is a people-first, digital-led bank, serving communities in Nigeria by providing access to reliable banking services</Box>
                <div className='mt-10 sm:mt-[1.2rem] sm:w-full flex sm:justify-center gap-[1rem]' >
                    <CustomButton linkTo='https://play.google.com/store/apps/details?id=com.clive.zikora'>
                        <>
                        <FaGooglePlay/> 
                            <Typography sx={{
                                paddingLeft: '15px'
                            }}>Play Store</Typography>
                        </>
                    </CustomButton>

                    <CustomButton color='white' linkTo='#'>
                        <>
                        <Box sx={{color: 'blue'}}>
                            <FaAppStoreIos /> 

                        </Box>
                            <Typography sx={{
                                paddingLeft: '15px',
                                color: '#404040'
                            }}>App Store</Typography>
                        </>
                    </CustomButton>
                    
                </div>
            </div>

            {/* right  */}
            <div className='mt-10 sm:mt-[1.5rem] sm:mb-[2rem] rounded w-5/12 sm:w-full ' >
                <img className='' src={homeMainFrame} alt="main" />
            </div>

        </div>
    </Box>
  )
}

export default HomeMain

function CustomButton({children,color,linkTo}) {
    return (
      <ButtonM variant='contained' sx={{
          padding: '1rem 0',
          color: 'white',
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '20px',
          width: '12rem',
          backgroundColor: color !== undefined ? 'white':'#404040',
          "&:hover": {
              backgroundColor: '#8c8c8c',
              
          },
          '@media (max-width: 639px)': {
             width: '85%',
           },
      }} onClick={()=>{window.location = linkTo}}>
          {children}
      </ButtonM>
    )
  }