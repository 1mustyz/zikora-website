import React from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import homeMainBg from '../../images/home-main-bg.png'
import homeMainFrame from '../../images/image 1.png'
import homeMainBgSmall from '../../small-images/sm:home-main.png'

import Box from '@mui/material/Box';


const HomeMain = () => {
  return (
    <Box sx={{
        minHeight: '130vh',
        background: 'rgba(232, 236, 227, 0.33)',
        paddingTop: '2rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        fontFamily: 'Circular Std',
        backgroundImage: `url(${homeMainBg})`,
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
                <Box className='mt-10 sm:mt-[1.2rem] leading-1 text-xl sm:text-[14px] opacity-75'>Zikora is a people-first bank, serving communities in Nigeria by providing access to reliable digital banking services.</Box>
                <div className='mt-10 sm:mt-[1.2rem] sm:w-full sm:flex sm:justify-center ' >
                    <Button title="Start Online Banking" style={{
                        padding: '1.2rem 2rem',
                        background: '#66A681',
                        color: 'white',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '@media (max-width: 639px)': {
                            with: '100%',
                            fontSize: '14px',
                            padding: '5% 27%',
                            borderRadius: '0.3rem',

                        },
                    }} />

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