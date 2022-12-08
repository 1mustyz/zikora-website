import React from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import mainPhoto from '../../images/My project 3jj(2).png'
import homeMainBg from '../../images/home-main-bg.png'
import homeMainFrame from '../../images/image 1.png'
import homeMainFrame266 from '../../images/Frame 266.png'
import homeMainVector336 from '../../images/Vector 336.png'
import homeMainVector from '../../images/Vector.png'
import {FaWallet} from 'react-icons/fa'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';








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
            backgroundImage: 'none',
        },

    }}>
        <Header />

        <div className='flex flex-row mt-5  justify-between sm:flex-col sm:px-8 '>
            {/* left */}
            <div className='mt-20 sm:mt-10 w-1/2 flex flex-col h-full sm:h-96 sm:w-full ' >
                <Box sx={{
                    '@media (max-width: 639px)': {
                        fontSize: '42px'
                    },
                }} className='text-7xl  font-bold  h-5/6 flex flex-col justify-between opacity-75'>
                    <p>Stress free</p>
                    <p className='pt-2'>Banking, at your</p>
                    <p className='pt-2'>Fingertips</p>
                </Box>
                <Box sx={{
                    '@media (max-width: 639px)': {
                        fontSize: '18px'
                    },
                }}className='mt-10 leading-1 text-xl opacity-75'>Zikora is a people-first bank, serving communities in Nigeria by providing access to reliable digital banking services.</Box>
                <div className='mt-10 sm:w-full sm:flex sm:justify-center ' >
                    <Button title="Start Online Banking" style={{
                        padding: '1.2rem 2rem',
                        background: '#66A681',
                        color: 'white',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '@media (max-width: 639px)': {
                            with: '100%',
                            fontSize: '16px',
                            padding: '5% 28%',

                        },
                    }} />

                </div>
            </div>

            {/* right  */}
            <div className='mt-10  rounded w-5/12 sm:w-full ' >
                <img className='' src={homeMainFrame} alt="main image" />
            </div>

        </div>
    </Box>
  )
}

export default HomeMain