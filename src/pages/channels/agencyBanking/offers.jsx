import React from 'react'
import {Box, Typography, } from '@mui/material';
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
    <Box className='h-full width-full pt-[7rem] mb-[6rem] flex flex-col items-center' >
        <Typography  sx={{
            fontSize: '34px',
            fontWeight: 'bold',
            color: '#404040'

        }}>
            What you can do
        </Typography>
        <Typography sx={{color: '#5E5E5E', fontSize: '16px'}}>
          The app offers all the features of the mobile browser service
        </Typography>

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
            <PreImageAndText pic={mobileBankingPic4} title="Open Zikora account"/>
            <VerticalDivider />

            <PreImageAndText pic={mobileBankingPic5} title="Cash deposits" />
            <VerticalDivider />

            <PreImageAndText pic={mobileBankingPic3} title="Balance inquiry"/>


        </Box>

        {/* Team members */}
        <Box className='flex flex-col items-center mt-[4rem] pb-[2rem]'>
        

        {/* board of directors */}
          <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '8rem',
              alignItems: 'center',
              marginTop: '4rem'
          }}>
              <PreImageAndText pic={mobileBankingPic2} title="Cash withdraw"/>
              <VerticalDivider />
              
              <PreImageAndText pic={mobileBankingPic1} title="Bank statment"/>
              <VerticalDivider />

              <PreImageAndText pic={mobileBankingPic6} title="Airtim purchase"/>


          </Box>
        </Box>

        <Box className='flex flex-col items-center mt-[2rem] pb-[6rem]'>
        

        {/* board of directors */}
          <Box sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '8rem',
              alignItems: 'center',
              marginTop: '4rem'
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
        alignItems: 'center'
    }}>
      <CustomIconns color='white'> <img src={pic} alt="" /> </CustomIconns>

      <Typography sx={{fontSize: '22px',fontWeight: '500', marginTop: '3rem', color: '#404040'}}>{title}</Typography>
      <Typography sx={{fontSize: '22px', fontWeight: '500', color: '#404040'}}>{post}</Typography>

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
export default Offers