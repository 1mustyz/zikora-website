import React from 'react'
import {Box, Typography, } from '@mui/material';
import aboutPic2 from '../../images/about-image2.png'
import aboutPic3 from '../../images/about-image3.png'
import aboutPic4 from '../../images/about-image4.png'
import aboutPic5 from '../../images/about-image5.png'
import aboutPic6 from '../../images/about-image6.png'

import Divider from '../../components/divider'


const Directors = () => {
  return (
    <Box className='h-full width-full pt-[7rem] mb-[6rem] flex flex-col items-center'
    sx={{
      backgroundImage: `url(${aboutPic3})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'left',
      backgroundPositionY: 'bottom'
    }}
    >
        <Typography  sx={{
            fontSize: '34px',
            fontWeight: 'bold',
            color: '#404040'

        }}>
            Board of Directors
        </Typography>
        <Typography sx={{color: '#5E5E5E', fontSize: '16px'}}>
            The Zikora team is dedicated in building prosperity for our users
        </Typography>

        {/* board of directors */}
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '5rem',
            alignItems: 'center',
            marginTop: '4rem'
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
        <Box className='flex flex-col items-center mt-[14rem] border-b-1 pb-[6rem]'>
        <Typography  sx={{
            fontSize: '34px',
            fontWeight: 'bold',
            color: '#404040'

        }}>
            Team members
        </Typography>
        <Typography sx={{color: '#5E5E5E', fontSize: '16px'}}>
            The Zikora team is to building prosperity for our users
        </Typography>

        {/* board of directors */}
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '5rem',
            alignItems: 'center',
            marginTop: '4rem'
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