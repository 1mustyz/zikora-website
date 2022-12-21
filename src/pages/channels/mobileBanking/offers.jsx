import React from 'react'
import {Box, Typography, } from '@mui/material';
import mobileBankingPic1 from '../../../images/mobile-banking-channels-bill.png'
import mobileBankingPic2 from '../../../images/mobile-banking-channels-finance 1.png'
import mobileBankingPic3 from '../../../images/mobile-banking-channels-transfer.png'
import mobileBankingPic4 from '../../../images/mobile-banking-channels-wallet.png'
import mobileBankingPic5 from '../../../images/mobile-banking-channnels-bank-statement.png'


import Divider from '@mui/material/Divider'


const Offers = () => {
  return (
    <Box className='h-full width-full pt-[7rem] mb-[6rem] flex flex-col items-center' >
        <Typography  sx={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#404040'

        }}>
            What you can do
        </Typography>
        <Typography sx={{color: '#5E5E5E', fontSize: '18px'}}>
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
            <PreImageAndText pic={mobileBankingPic4} title="Check your account" post="balance"/>
            <VerticalDivider />

            <PreImageAndText pic={mobileBankingPic5} title="Review recent account" post="activity"/>
            <VerticalDivider />

            <PreImageAndText pic={mobileBankingPic3} title="Transfer money between" post="accounts"/>


        </Box>

        {/* Team members */}
        <Box className='flex flex-col items-center mt-[4rem] pb-[6rem]'>
        

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
            <PreImageAndText pic={mobileBankingPic2} title="Airtime" post="vending"/>
            <VerticalDivider />
            <PreImageAndText pic={mobileBankingPic1} title="Manage & make bill" post="payments"/>

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

      <Typography sx={{fontSize: '24px',fontWeight: '500', marginTop: '3rem', color: '#404040'}}>{title}</Typography>
      <Typography sx={{fontSize: '24px', fontWeight: '500', color: '#404040'}}>{post}</Typography>

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