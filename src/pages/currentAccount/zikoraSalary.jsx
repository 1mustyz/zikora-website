import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../images/Salary 1.png'
import greenCardPic from '../../images/Salary 2.png'
import GreenCard from '../../components/GreenCard';

const ZikoraSalary = () => {
  return (
    <Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '8rem',
            marginLeft: '5rem',
            marginRight: '5rem',
            justifyContent: 'space-between',
            '@media (max-width: 639px)': {
              flexDirection: 'column',
              margin: '3rem 2rem 0 2rem',
              paddingBottom: '3rem'
    
            },
        }}>
            {/* left */}
            <Box >
              <Box className='w-[100%] sm:w-[100%]'>
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
                Zikora Salary
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
            We provide accounts with unlimited access to our banking facilities tailored to employees.
            </Typography>

            <ul style={{listStyleType: 'disc'}} className='mt-[2rem] ml-[1rem] leading-[180%] text-[#242020] sm:text-[14px]'>
                <li>Access to unlimited withdrawals</li>
                <li>Access to Zikora financial advisors</li>
            </ul>

                    
            </Box>
        </Box>
        <GreenCard greenCardPic={greenCardPic}>
            <li>Signed copy of Zikora account opening form</li>
            <li>Valid identification (Passport, Driving license etc)</li>
            <li>Account opening form & One passport photograph</li>
            <li>3 Months utility bill with current address</li>
            <li>2 duly signed & completed reference forms</li>
        </GreenCard>
    </Box>
  )
}



export default ZikoraSalary