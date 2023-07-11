import React from 'react'
import {Box, Typography, } from '@mui/material';
import aboutPic1 from '../../board-images/Ifeacho.png'
import aboutPic2 from '../../board-images/BernadineOkeke_low.png'
import aboutPic3 from '../../board-images/Okeke_low.png'
import aboutPic4 from '../../board-images/Pius_low.png'
import aboutPic5 from '../../board-images/emmanuel_low.png'
import aboutPic6 from '../../board-images/Peter_low.png'
import aboutPicBg from '../../images/about-image3.png'
import chiomaPic from '../../board-images/chioma.png'
import mathewEzePic from '../../board-images/matthew-eze.png'
import aboutPicAvatar from '../../board-images/avatar.webp'
import Divider from '../../components/divider'
import Carousel from './carousel';


const Directors = () => {
  const images1 = [
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
    <PreImageAndText pic={aboutPic3} title="Olisa Okeke" post="Chairman"/>
    <VerticalDivider />

    <PreImageAndText pic={aboutPic6} title="Peter Eze" post="MD/CEO"/>
    <VerticalDivider />

    <PreImageAndText pic={aboutPic2} title="Bernadine Okeke" post="Director"/>
    <VerticalDivider />
    </Box>,

    <Box 
    sx={{
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
    <PreImageAndText pic={aboutPicAvatar} title="Chidozie Agbapu" post="Director"/>
    <VerticalDivider />


    <PreImageAndText pic={aboutPicAvatar} title="Sir. Ike Onyechi" post="Director"/>
    <VerticalDivider />

    <PreImageAndText pic={aboutPicAvatar} title="Charles Ezekwe" post="Director"/>
    <VerticalDivider />
    </Box>,

    <Box 
    sx={{
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
    <PreImageAndText pic={aboutPic1} title="Tony Ifeacho" post="Director"/>
    <VerticalDivider />
    </Box>

  ]

  const images2 = [
    <Box 
    sx={{
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
    <PreImageAndText pic={aboutPic6} title="Peter Eze" post="MD/CEO"/>
    <VerticalDivider />

    <PreImageAndText pic={mathewEzePic} title="Mathew Eze" post="Head Credit & Marketing"/>
    <VerticalDivider />

    {/* <PreImageAndText pic={aboutPic4} title="Pius Ugochukwu" post="Chief Information Officer"/>
    <VerticalDivider /> */}

    <PreImageAndText pic={chiomaPic} title="Chioma Onuoha" post="Head Digital Marketing"/>
    <VerticalDivider />
    </Box>,

    <Box 
    sx={{
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
     <PreImageAndText pic={aboutPicAvatar} title="Emmanuel Ikogho" post="Head of Operations"/>
      <VerticalDivider />

      

      <PreImageAndText pic={aboutPicAvatar} title="Josemaria Ebisi" post="Chief Financial Controller"/>
      <VerticalDivider />
    </Box>,
  ]

  return (
    <Box className='h-full width-full pt-[7rem] sm:pt-[3rem] mb-[6rem] flex flex-col items-center'
    sx={{
      backgroundImage: `url(${aboutPicBg})`,
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
            display: 'none',
            '@media (max-width: 639px)': {
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              justifyContent: 'flex-start',

           }
        }}>
            <VerticalDivider />
            <PreImageAndText pic={aboutPic3} title="Olisa Okeke" post="Chairman"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic6} title="Peter Eze" post="MD/CEO"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic1} title="Tony Ifeacho" post="Director"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic2} title="Bernadine Okeke" post="Director"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPicAvatar} title="Chidozie Agbapu" post="Director"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPicAvatar} title="Sir. Ike Onyechi" post="Director"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPicAvatar} title="Charles Ezekwe" post="Director"/>
            <VerticalDivider />
{/* <h1>kdkdk</h1> */}

        </Box>
        <div className='sm:hidden'>
          <Carousel images1={images1}/>
        </div>
       

        {/* Team members */}
        <Box className='flex flex-col items-center mt-[8rem] sm:mt-[5rem] border-b-1 pb-[6rem] sm:w-[100vw]'>
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
            display: 'none',
            '@media (max-width: 639px)': {
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              whiteSpace: 'nowrap',
              justifyContent: 'flex-start',

           }
        }}>
            <VerticalDivider />
            <PreImageAndText pic={aboutPic6} title="Peter Eze" post="MD/CEO"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic5} title="Mathew Eze" post="Head Credit & Marketing"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPic4} title="Pius Ugochukwu" post="Chief Information Officer"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPicAvatar} title="Emmanuel Ikogho" post="Head of Operations"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPicAvatar} title="Chioma Onuoha" post="Head Digital Marketing"/>
            <VerticalDivider />

            <PreImageAndText pic={aboutPicAvatar} title="Josemaria Ebisi" post="Chief Financial Controller"/>
            <VerticalDivider />


        </Box>
        <div className='sm:hidden'>
          <Carousel images1={images2}/>
        </div>
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
        backgroundSize: '10rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '12rem',
        height: '12rem',
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