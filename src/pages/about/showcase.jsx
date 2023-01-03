import React from 'react'
import {Box} from '@mui/material';
import aboutPic2 from '../../images/about-image2.png'



const ShowCase = () => {
  return (
    <Box className='h-full width-full pt-20 sm:pt-[3rem] flex flex-col items-center'
    sx={{
      backgroundColor: '#F7F7F7'
    }}
    >
        <p className='text-[16px] sm:text-[14px] text-[#5E5E5E]' >
            We Believe In Our Mission
        </p>
        <p className='text-[28px] sm:text-[22px] text-[#404040] font-[700]'>
            To Reach Possibilities
        </p>

        {/* green card */}
        <Box sx={{
          width: '85%',
          height: '50%',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'row',
          '@media (max-width: 639px)': {
            flexDirection: 'column'
        },

        }}>
          {/* left */}
            <Box sx={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '4rem',
              paddingRight: '8rem',
              backgroundColor: '#66A681',
              borderTopLeftRadius: '1.2rem',
              color: 'white',
              '@media (max-width: 639px)': {
                width: '100%',
                borderTopLeftRadius: '0.8rem',
                borderTopRightRadius: '0.8rem',
                padding: '2rem 1.5rem 0 1.5rem',


            },
              }}>
              <p className='text-[28px] sm:text-[24px] font-[700] italic'  >
                  "Zikora was created to show people the possibilities of forward thinking banking..."
              </p>

              <p className='mt-[2rem] text-[16px] sm:text-[14px]'>
                  - Bernadine Okeke
              </p>

             
            </Box>
            {/* right */}
            <Box sx={{
              backgroundColor: '#404040',
              width: '50%',
              borderTopRightRadius: '1.2rem',
              '@media (max-width: 639px)': {
                width: '100%',
                borderRadius: '0',
                

            },

            }}>
                    <img className='rounded-tr-[1.2rem] sm:rounded-b-[1.2rem]' src={aboutPic2} alt="green card" />
            </Box>
        </Box>
    </Box>
  )
}

export default ShowCase