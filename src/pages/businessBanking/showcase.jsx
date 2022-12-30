import React from 'react'
import homeMainBg from '../../images/account-image2.png'
import vectorImg2 from '../../images/business-vector2.png'
import vectorImg4 from '../../images/business-vector4.png'
import vectorImg5 from '../../images/business-vector5.png'
import vectorImg6 from '../../images/business-vector6.png'
import vectorImg7 from '../../images/business-vector7.png'
import vectorImg8 from '../../images/business-vector8.png'
import Carousel from './carousel'


import {Box} from '@mui/material'

const Showcase = () => {
  return (
    <Box sx={{
        backgroundImage: `url(${homeMainBg})`,
        backgroundRepeat: 'no-repeat',
        paddingTop: '8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '2rem',
        '@media (max-width: 639px)': {
         backgroundSize: '15rem',
         paddingBottom: 0
      },
        }}>
        <p className='text-[18px] sm:font-[700] sm:mx-[1rem] sm:text-center text-[#404040]'>100K+ venture-backed and bootstrapped startups build with Zikora</p>

        <Box className='flex flex-row w-[83%] justify-between align-bottom mt-[2.5rem] sm:hidden '>
            <img className='w-[109.71px] h-[14.99px]' src={vectorImg8} alt="" />
            <img className='w-[137.12px] h-[17.83px]' src={vectorImg2} alt="" />
            <img className='w-[96.62px] h-[11.78px]' src={vectorImg7} alt="" />

            <img className='w-[137.12px] h-[21.01px]' src={vectorImg4} alt="" />

            <img className='w-[87.3px] h-[24.96px]' src={vectorImg5} alt="" />

            <img className='w-[137.12px] h-[28.07px]' src={vectorImg6} alt="" />



        </Box>
        <Box className='hidden sm:block'>
          <Carousel />
        </Box>
    </Box>
  )
}



export default Showcase