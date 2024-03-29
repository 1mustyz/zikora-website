import React from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import homeMainBg from '../../images/home-main-bg.png'
import homeMobileMainBg from '../../small-images/business-banking-mobile-bg.png'
import homeMainFrame from '../../images/Business Banking 1.png'
import Box from '@mui/material/Box';


const Main = () => {
  return (
    <Box sx={{
        maxHeight: '130vh',
        background: 'rgba(232, 236, 227, 0.33)',
        paddingTop: '2rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        fontFamily: 'Circular Std',
        backgroundImage: `url(${homeMainBg})`,
        backgroundSize: '100%',
        '@media (max-width: 639px)': {
            padding: 0,
            backgroundImage: `url(${homeMobileMainBg})`,
            maxHeight: '140vh'

        },

    }}>
        <Header />

        <div className='flex flex-row mt-5  justify-between sm:flex-col sm:px-[1.5rem] '>
            {/* left */}
            <div className='mt-20 sm:mt-[1rem] w-1/2 flex flex-col h-full  sm:w-full ' >
                
                <Box  className='text-6xl sm:text-[34px] font-bold h-5/6 sm:h-[7rem]  flex flex-col justify-between  opacity-75'>
                    <p className='sm:p-[0rem] sm:m-[0rem]'>Zikora Bank for</p>
                    <p className='pt-2 sm:p-[0rem] sm:m-[0rem]'>Business &</p>
                    <p className='pt-2 sm:p-[0rem] sm:m-[0rem]'>Entrepreneurs</p>
                </Box>
                <Box className='mt-10 leading-1 sm:leading-[180%] sm:text-[16px] text-xl opacity-75'>Zikora is a people-first bank, serving communities in Nigeria by
                providing access to reliable digital banking services.</Box>
                <div className='mt-10 sm:w-full sm:flex sm:justify-center ' >
                    <Button title="Start Business Banking" style={{
                        padding: '1.2rem 2rem',
                        background: '#66A681',
                        color: 'white',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '@media (max-width: 639px)': {
                            with: '100%',
                            fontSize: '14px',
                            padding: '1.2rem 4.3rem',

                        },
                    }} />

                </div>
            </div>

            {/* right  */}
            <div className='mt-10 sm:mt-[2.2rem]  rounded w-5/12 sm:w-full ' >
                <img className='' src={homeMainFrame} alt="main" />
            </div>

        </div>
    </Box>
  )
}

export default Main