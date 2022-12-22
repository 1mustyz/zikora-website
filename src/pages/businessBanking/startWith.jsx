import React from 'react'
import {Box, Typography, } from '@mui/material';
import mobileBankingPic1 from '../../images/bussnes-s1.png'
import mobileBankingPic2 from '../../images/bussnes-s2.png'
import mobileBankingPic3 from '../../images/bussnes-s3.png'


const StartWith = () => {
  return (
    <Box className='h-full width-full pt-[7rem] mb-[6rem]'>

        <Box className='ml-[7rem]'>

            <Typography  sx={{
                fontSize: '34px',
                fontWeight: 'bold',
                color: '#404040'

            }}>
                Start with basics that just work
            </Typography>
            <Typography sx={{color: '#5E5E5E', fontSize: '16px',}}>
                Lorem ipsum dummy text are used in this section so place your text.
            </Typography>
        </Box>
        <Box className='flex flex-col items-center w-[90%] m-[auto] ' >

            {/* board of directors */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '8rem',
                alignItems: 'center',
                marginTop: '4rem',
            }}>
                <PreImageAndText pic={mobileBankingPic1} title="Open FDIC-insured checking and savings accounts."/>
                <VerticalDivider />

                <PreImageAndText pic={mobileBankingPic2} title="Easily issue employee debit and credit cards with custom limits."/>
                <VerticalDivider />

                <PreImageAndText pic={mobileBankingPic3} title="Pay vendors and employees through ACH, wires, checks, and foreign exchange." />


            </Box>

            {/* Team members */}
            {/* <Box className='flex flex-row w-[80vw] h-[70vh] mt-[4rem] '>
            
            <Box className='w-[40%] h-[100%] flex flex-col justify-center pl-[2rem] bg-[#F7F7F7] rounded-tl-[1rem] rounded-bl-[1rem]'>
                <p className='text-[#5E5E5E] text-[16px]'>How to</p>
                <p className='text-[#404040] text-[28px]'>Purchase Airtime</p>
            </Box>

            <Box className=' w-[30%] h-[100%] flex flex-col gap-[2rem] pt-[2rem] pl-[2rem] bg-[#E8ECE3]'
                sx={{
                backgroundImage: `url(${ussdBankingPic2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'right',
                backgroundPositionY: 'bottom'
                }}
            >
                <p className='text-[18px] text-[#404040]'>For you</p>
                <Box className='flex flex-col gap-[1rem]'>
                <TextAndArrow text="Dial *614*677* Amount# (e.g: *614*100#)" arrowColor="#CCCCCC" textColor="#404040"/>
                <TextAndArrow text="Wait for the success message" arrowColor="#CCCCCC" textColor="#404040"/>
                <TextAndArrow text="Start making call" arrowColor="#CCCCCC" textColor="#404040"/>

                </Box>
                
            </Box>

            <Box className='w-[30%] h-[100%] pt-[2rem] pl-[2rem] flex flex-col gap-[2rem] bg-[#404040] rounded-tr-[1rem] rounded-br-[1rem] '
                sx={{
                backgroundImage: `url(${ussdBankingPic1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'right',
                backgroundPositionY: 'bottom'
                }}
            >
                <p className='text-[#FFFFFF]'>To Others Number</p>
                <Box className='flex flex-col gap-[1rem]'>
                <TextAndArrow text="Dial *614*677* Amount* Phone Number #" arrowColor="#5E5E5E" textColor="#FFFFFF"/>
                <TextAndArrow text="Wait for the success message" arrowColor="#5E5E5E" textColor="#FFFFFF"/>
                <TextAndArrow text="Enjoy" arrowColor="#5E5E5E" textColor="#FFFFFF"/>

                </Box>
                
            </Box>

            </Box> */}
            {/* <Divider className="w-[90vw]"/> */}

        </Box>
    </Box>
  )
}


const PreImageAndText = ({pic, title, post}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }}>
      <CustomIconns color='white'> <img src={pic} alt="" /> </CustomIconns>

      <Typography sx={{fontSize: '18px', fontWeight: '500', marginTop: '3rem', color: '#404040'}}>{title}</Typography>
      <Typography sx={{fontSize: '18px',  color: '#404040'}}>{post}</Typography>

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
 
 const CustomIconns = ({color, children}) => {
  return (
    <Box sx={{
        backgroundColor: '#F7F7F7', 
        width: '180px', 
        height: '180px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6rem',
        color: 'white'
    }}>{children}</Box>
  )
}



export default StartWith