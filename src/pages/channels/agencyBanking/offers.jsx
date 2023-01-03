import React from 'react'
import {Box} from '@mui/material';
import mobileBankingPic1 from '../../../images/mobile-banking-channnels-bank-statement.png'
import mobileBankingPic2 from '../../../images/mobile-banking-channels-wallet.png'
import mobileBankingPic3 from '../../../images/agency-banking-money-back 1.png'
import mobileBankingPic4 from '../../../images/ZikoraLogoGreen 1.png'
import mobileBankingPic5 from '../../../images/agency-banking-deposit 1.png'
import mobileBankingPic6 from '../../../images/mobile-banking-channels-finance 1.png'
import mobileBankingPic7 from '../../../images/mobile-banking-channels-bill.png'
import mobileBankingPic8 from '../../../images/mobile-banking-channels-transfer.png'
import mobileBankingPic9 from '../../../images/agency-banking-bank-features.png'



import Divider from '@mui/material/Divider'


const Offers = () => {
  return (
    <Box className='h-full width-full pt-[7rem] sm:pt-[4rem] mb-[6rem] sm:mb-[4rem] flex flex-col items-center sm:items-start sm:mx-[1.5rem]' >
      <p className='text-[34px] text-[#404040] font-[700] sm:text-[24px] sm:text-center sm:w-[70%] sm:mx-[auto]'  >
        What you can do
      </p>

      <p className='text-[16px] text-[#5E5E5E] sm:text-[14px] sm:text-center sm:leading-[180%] sm:mt-[0.8rem]'>
        The app offers all the features of the mobile browser service
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
          }
        }}>
            <PreImageAndText pic={mobileBankingPic4} title="Open Zikora account"/>
            <VerticalDivider />

            <PreImageAndText pic={mobileBankingPic5} title="Cash deposits" />
            <VerticalDivider />

            <PreImageAndText pic={mobileBankingPic3} title="Balance inquiry"/>


        </Box>

        {/* Team members */}
        <Box className='flex flex-col items-center sm:items-start mt-[4rem] sm:mt-[0] pb-[0] sm:pb-[0]'>
        

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
            }
          }}>
              <PreImageAndText pic={mobileBankingPic2} title="Cash withdraw"/>
              <VerticalDivider />
              
              <PreImageAndText pic={mobileBankingPic1} title="Bank statment"/>
              <VerticalDivider />

              <PreImageAndText pic={mobileBankingPic6} title="Airtim purchase"/>


          </Box>
        </Box>

        <Box className='flex flex-col items-center sm:items-start mt-[4rem] sm:mt-[0] pb-[6rem] sm:pb-[4rem]'>
        

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
            }
          }}>
              <PreImageAndText pic={mobileBankingPic7} title="Bill payments"/>
              <VerticalDivider />
              
              <PreImageAndText pic={mobileBankingPic8} title="Fund transfer"/>
              <VerticalDivider />

              <PreImageAndText pic={mobileBankingPic9} title="Future features"/>


          </Box>
        </Box>
        <Divider className="w-[90vw]"/>

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
export default Offers