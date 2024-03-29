import React from 'react'
import {Box} from '@mui/material';
import ussdBankingPic1 from '../../../images/channels-image1.png'
import ussdBankingPic2 from '../../../images/channels-image3.png'
import mobileBankingPic4 from '../../../images/ussd-banking-dial-pad.png'
import mobileBankingPic5 from '../../../images/ussd-banking-accounting.png'

import {MdOutlineArrowForward} from 'react-icons/md'




const AccountBalance = () => {
  return (
    <Box className='h-full width-full pt-[7rem] mb-[8rem] sm:mb-[40rem] sm:mt-[25rem] flex flex-col items-center sm:items-start' >
        
        <p className='text-[16px] text-[#5E5E5E] sm:text-[14px] sm:text-center sm:leading-[180%] sm:mt-[0.8rem] sm:w-[70%] sm:mx-[auto]'>
          How to
        </p>
        <p className='text-[34px] text-[#404040] font-[700] sm:text-[24px] sm:text-center sm:w-[100%] sm:mx-[auto]'  >
          Check account balance
        </p>
        

        {/* board of directors */}
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '8rem',
            alignItems: 'center',
            marginTop: '4rem',
            '@media (max-width: 639px)': {
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '2rem',
              marginTop: '2rem',
              margin: '2rem 1.5rem 0 1.5rem'
          }
        }}>
            <PreImageAndText pic={mobileBankingPic4} title="Dial *614*677*0#"/>
            <VerticalDivider />

            <PreImageAndText pic={mobileBankingPic5} title="See balance"/>
            


        </Box>

        {/* Team members */}
        <Box className='flex flex-row sm:flex-col w-[80vw] sm:w-[100vw] h-[70vh] mt-[4rem] '>
        
          <Box className='w-[40%] sm:w-[100vw] h-[100%] flex flex-col justify-center pl-[2rem] sm:pl-0 sm:pb-[3rem] sm:pt-[5rem] sm:text-center bg-[#F7F7F7] rounded-tl-[1rem] rounded-bl-[1rem] sm:rounded-none'>
            <p className='text-[#5E5E5E] text-[16px] sm:text-[14px]'>How to</p>
            <p className='text-[#404040] text-[28px] sm:text-[24px] sm:font-[700]'>Transfer Money</p>
          </Box>
                 
          <Box className=' w-[30%] sm:w-[100vw] h-[100%] flex flex-col gap-[2rem] sm:pb-[6rem] pt-[2rem] pl-[2rem] bg-[#E8ECE3]'
            sx={{
              backgroundImage: `url(${ussdBankingPic2})`,
              backgroundRepeat: 'no-repeat',
              backgroundPositionX: 'right',
              backgroundPositionY: 'bottom',
              '@media (max-width: 639px)': {
                backgroundSize: '6rem'
               }
            }}
          >
            <p className='text-[18px] text-[#404040]'>To Zikora Account</p>
            <Box className='flex flex-col gap-[1rem]'>
              <TextAndArrow text="Dial *614*677* Amount# Account number# (e.g: *614*677*1000* 1232345#) " arrowColor="#CCCCCC" textColor="#404040"/>
              <TextAndArrow text="Authanticate with 4 digit" arrowColor="#CCCCCC" textColor="#404040"/>
              <TextAndArrow text="Create security code using menu option" arrowColor="#CCCCCC" textColor="#404040"/>

            </Box>
            
          </Box>

          <Box className='w-[30%] sm:w-[100vw] h-[100%] sm:pb-[6rem] pt-[2rem] pl-[2rem] flex flex-col gap-[2rem] bg-[#404040] rounded-tr-[1rem] rounded-br-[1rem] sm:rounded-none'
            sx={{
              backgroundImage: `url(${ussdBankingPic1})`,
              backgroundRepeat: 'no-repeat',
              backgroundPositionX: 'right',
              backgroundPositionY: 'bottom',
              '@media (max-width: 639px)': {
                backgroundSize: '6rem'
               }
            }}
          >
            <p className='text-[#FFFFFF]'>To other Banks</p>
            <Box className='flex flex-col gap-[1rem]'>
              <TextAndArrow text="Dial *614*677* Amount* Account number # (e.g: *614*677*1000* 1234512345#)" arrowColor="#5E5E5E" textColor="#FFFFFF"/>
              <TextAndArrow text="Authanticate with 4 digit" arrowColor="#5E5E5E" textColor="#FFFFFF"/>
              <TextAndArrow text="Create security code using menu option" arrowColor="#5E5E5E" textColor="#FFFFFF"/>

            </Box>
            
          </Box>

        </Box>
        {/* <Divider className="w-[90vw]"/> */}

    </Box>
  )
}


const PreImageAndText = ({pic, title, post}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (max-width: 639px)': {
          flexDirection: 'row',
          gap: '1rem'
        }
    }}>
      <CustomIconns color='white'> 
      <Box sx={{
        backgroundImage: `url(${pic})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        '@media (max-width: 639px)': {
          backgroundSize: '2.5rem',
         
        }
      }}>

      </Box>
      </CustomIconns>
      <Box className='text-center sm:text-left'>
        <p className='text-[22px] text-[#404040] font-[500] sm:text-[18px] mt-[3rem] sm:mt-[0]'>
          {title}
        </p>

        <p className='text-[22px] text-[#404040] font-[500] sm:text-[18px]'>
          {post}
        </p>

      </Box>
    </Box>
  )
}
 
 const VerticalDivider = () => {
   return (
     <Box sx={{
      borderLeft: '1px solid #CCCCCC',
      height: '10rem',
      '@media (max-width: 639px)': {
        display: 'none'        
    }

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
        color: 'white',
        '@media (max-width: 639px)': {
          width: '100px', 
          height: '100px',
          borderRadius: '3rem',
        }  
    }}>{children}</Box>
  )
}


const TextAndArrow = ({text, arrowColor, textColor}) => {
  return (
    <div className='flex flex-row w-[75%] gap-[0.5rem] ' >
      <MdOutlineArrowForward className={`mt-[8px] text-[${arrowColor}]`}/>
      <p className={`text-[16px] text-[${textColor}] leading-[30px]`}>{text}</p>

    </div>
  )
}

export default AccountBalance