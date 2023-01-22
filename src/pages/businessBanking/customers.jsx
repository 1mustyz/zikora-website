import React from 'react'
import {IoMdQuote} from 'react-icons/io'
import {Box} from '@mui/material'
import avatar from '../../images/Avatar.png' 

const Customers = () => {
  return (
    <Box className='flex flex-col w-[100vw] max-w-[100%] items-center mt-[6rem] sm:mb-[5rem] gap-[2rem]'>
        <Box className='flex flex-row gap-[1rem] items-center'>
            <p className='text-[28px] sm:text-[18px] text-[#C0C6CD]'>CUSTOMERS</p>
            <Box className='p-[1rem] rounded-[2rem] text-[28px] sm:text-[18px]  bg-[#404040] text-[white]'>
                <IoMdQuote/>
            </Box>
            <p className='text-[28px] sm:text-[18px] text-[#C0C6CD]'>FEEDBACK</p>
        </Box>
        <p className='text-[34px] sm:text-[22px] font-[500] text-[#404040] w-[50%] sm:w-[90%] text-center'>Our customer retention rates doubled. Lorem helps us decode product usage and shows us what makes users tick.</p>

        <Box className='flex flex-row gap-[2rem] w-[50%] sm:w-[100%] justify-center'>
            <img src={avatar} alt="" />
            <Box className='flex flex-col gap-[1rem] sm:gap-[0.5rem]'>
                <p className='text-[#404040] text-[18px]'>Peter John</p>
                <p className='text-[#BDBDBD] text-[14px]'>Founter & CEO UXETO GROUP</p>
            </Box>
        </Box>
    </Box>
  )
}

export default Customers