import React from 'react'
import {Box} from '@mui/material';
import loanPic1 from '../../images/Loans 1.png'


const Mission = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '8rem',
        marginLeft: '5rem',
        marginRight: '5rem',
        '@media (max-width: 639px)': {
          flexDirection: 'column',
          margin: '3rem 1rem 0 1rem'
           
       }
    }}>
        {/* left */}
        <Box >
          <Box className='w-[75%] sm:w-[100%]'>
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
              Replace heading here
          </p>

          <p className='text-[16px] text-[#5E5E5E] sm:text-[14px] mt-[2rem] sm:mt-[0.5rem] leading-[180%]' >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non rem pariatur sit libero assumenda quidem quod vero, dolor incidunt dolores doloribus hic exercitationem tempora placeat deserunt dolore harum fugiat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non rem pariatur sit libero assumenda quidem quod vero, dolor incidunt dolores doloribus hic exercitationem tempora placeat deserunt dolore harum fugiat.
          </p>

                  
        </Box>
    </Box>
  )
}

export default Mission