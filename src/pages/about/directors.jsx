import React from 'react'
import {Box, Typography, } from '@mui/material';
// import aboutPic2 from '../../images/about-image2.png'
import aboutPic3 from '../../images/about-image3.png'
import aboutPic4 from '../../images/about-image4.png'
import aboutPic5 from '../../images/about-image5.png'
import aboutPic6 from '../../images/about-image6.png'

import Divider from '../../components/divider'


const Directors = () => {
  return (
    <Box className='h-full width-full pt-[7rem] sm:pt-[3rem] mb-[6rem] flex flex-col items-center'
    sx={{
      backgroundImage: `url(${aboutPic3})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'left',
      backgroundPositionY: 'bottom'
    }}
    >
        <p className='text-[34px] sm:text-[22px] text-[#404040] font-[700]' >
            Board of Directors
        </p>
        <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] sm:w-[80%] sm:text-center sm:mt-[0.7rem]'>
            The Zikora team is dedicated in building prosperity for our users
        </p>

        {/* board of directors */}
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '5rem',
            alignItems: 'center',
            marginTop: '4rem',
            '@media (max-width: 639px)': {
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              gap: '5rem',
              justifyContent: 'flex-start'
           }
        }}>
            <VerticalDivider />
            <PreImageAndText pic={aboutPic4} title="Tony Ifeacho" post="Director"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic5} title="Bernadine Okeke" post="Director"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic6} title="Peter Eze" post="Managing Director"/>
            <VerticalDivider />


        </Box>

        {/* Team members */}
        <Box className='flex flex-col items-center mt-[14rem] sm:mt-[5rem] border-b-1 pb-[6rem] sm:w-[100vw]'>
        <p className='text-[34px] sm:text-[22px] text-[#404040] font-[700]' >
            Team members
        </p>
        <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] sm:w-[80%] sm:text-center sm:mt-[0.7rem]'>
            The Zikora team is to building prosperity for our users
        </p>

        {/* board of directors */}
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '5rem',
            alignItems: 'center',
            marginTop: '4rem',
            '@media (max-width: 639px)': {
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              justifyContent: 'flex-start',
           }
        }}>
            <VerticalDivider />
            <PreImageAndText pic={aboutPic4} title="Pius Ugochukwu" post="Head IT"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic5} title="Emmanuel Ikogho" post="Head Operations"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic6} title="May You" post="Send Us Your Cv"/>
            <VerticalDivider />


        </Box>
        <Divider />
        </Box>

    </Box>
  )
}


const PreImageAndText = ({pic, title, post}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
      <Box sx={{
        backgroundImage: `url(${pic})`,
        width: '10rem',
        height: '10rem',
        borderRadius: '5rem'
      }}>
        
      </Box>

      <Typography sx={{fontSize: '22px', marginTop: '3rem'}}>{title}</Typography>
      <Typography sx={{fontSize: '14px', color: '#BDBDBD', marginTop: '0.7rem'}}>{post}</Typography>

    </Box>
  )
}
 
 const VerticalDivider = () => {
   return (
     <Box sx={{
      borderLeft: '1px solid #CCCCCC',
      height: '10rem',

     }}>

     </Box>
   )
 }
 

export default Directors