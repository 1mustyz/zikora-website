import React from 'react'
import {Box} from '@mui/material';
import loanPic1 from '../../images/About us page 1.png'


const Mission = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '8rem',
        marginLeft: '5rem',
        marginRight: '5rem',
        gap: '100px',
        '@media (max-width: 639px)': {
          flexDirection: 'column',
          margin: '3rem 1rem 0 1rem',
          gap:0
           
       }
    }}>
        {/* left */}
        <Box >
          <Box className='sm:w-[100%]'>
            <img src={loanPic1} alt="acquire loan" />
          </Box>
        </Box>
        {/* right */}
        <Box sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '1.5rem',
          '@media (max-width: 639px)': {
            width: '100%',
            margin: 0,
            marginTop: '3rem'             
         }
         
          }}>
          <p className='text-[34px] font-[700]  text-[#404040] sm:text-[24px]'  >
              Our Mission & Vission
          </p>

          <p  className='text-[16px] text-[#5E5E5E] sm:text-[14px] mt-[2rem] sm:mt-[0.5rem] leading-[180%]'>
              To provide digital platform designed to modernize the banking and business orientation of an expanding customer base.
          </p>

          <p  className='text-[16px] text-[#5E5E5E] sm:text-[14px] mt-[2rem] sm:mt-[0.5rem] leading-[180%]'>
              To be a Catalyst to the human and economic development of communities by providing financial solutions tailored to there need.
          </p>
         
        </Box>
    </Box>
  )
}

export default Mission