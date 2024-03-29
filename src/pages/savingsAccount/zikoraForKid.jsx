import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../images/kids 1.png'
import greenCardPic from '../../images/kids 2.png'
import GreenCard from '../../components/GreenCard';

const ZikoraForKid = () => {
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
                Zikora For Kids
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
              Give your children a head start in life. This account will enable you save for school fees, child expenses and will help imbibe the saving habit in your child. 
            </Typography>

            <ul style={{listStyleType: 'disc'}} className='mt-[2rem] ml-[1rem] leading-[180%] text-[#242020] sm:text-[14px]'>
                <li>Account allows large lodgements toward future expenses for the child.</li>
                <li>Interest earned on savings. </li>
                <li>Ownership of the account can be transfered to the child when the child is 18.</li>
            </ul>

                    
            </Box>
        </Box>
        <GreenCard greenCardPic={greenCardPic}>
          <li>Minimum opening balance of N1,000</li>
          <li>Signed copy of Zikora account opening form</li>
          <li>Valid identification (Passport, Driving license etc)</li>
          <li>One passport photograph</li>
          <li>3 Months utility bill with current address</li>
          <li>Copy of child’s birth certificate or age declaration</li>

        </GreenCard>
    </Box>
  )
}


export default ZikoraForKid