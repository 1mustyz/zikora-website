import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../images/Current accounts 1.png'
import greenCardPic from '../../images/Current accounts 2.png'
import GreenCard from '../../components/GreenCard';


const CuurentAccount = () => {
  return (
    <Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '8rem',
            marginLeft: '5rem',
            marginRight: '5rem',
            gap: '100px',
            '@media (max-width: 639px)': {
              flexDirection: 'column',
              margin: '3rem 2rem 0 2rem',
              paddingBottom: '3rem',
              gap: 0
    
            },
        }}>
            {/* left */}
            <Box >
            <Box className='sm:w-[100%]'>
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
              margin: '0',
              marginTop: '2rem'
            },
            
            }}>
            <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold',
                color: '#404040',
                '@media (max-width: 639px)': {
                  fontSize: '24px',
                  width: '100%'
                },
            }} >
                Zikora Personal
            </Typography>

            <Typography  sx={{
              marginTop: '2rem', 
              fontSize: '15px', 
              color:'#5E5E5E', 
              lineHeight: '180%',
              '@media (max-width: 639px)': {
                marginTop: '0.5rem',
                fontSize: '14px',
              },
              }}>
                Break down all your banking needs with a simple readily accesible account that gives you access to unlimited withdrawals, unlimited deposits and easy spending capabilities.
            </Typography>

            <ul style={{listStyleType: 'disc'}} className='mt-[2rem] ml-[1rem] leading-[180%] text-[#242020] sm:text-[14px]'>
                <li>Access to 24/7, all year round banking services.</li>
                <li>Personalized bank card with a flexible limit determined by you</li>
                <li>Access to a chequebook to make transactions smoother</li>
                <li>Unlimited access to the Zikora Digital Banking Suite</li>

            </ul>

                    
            </Box>
        </Box>
        <GreenCard greenCardPic={greenCardPic}>
               <li>Signed copy of Zikora account opening form</li>
                <li>Valid identification (Passport, Driving license etc)</li>
                <li>Account opening form & One passport photograph</li>
                <li>3 Months utility bill with current address</li>
                <li>2 duly signed & completed reference forms</li>
                <li>Tin Number</li>
        </GreenCard>
    </Box>
  )
}

export default CuurentAccount