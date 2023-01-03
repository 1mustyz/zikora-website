import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../images/kids 1.png'
import greenCardPic from '../../images/kids 2.png'

const ZikoraForKid = () => {
  return (
    <Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '8rem',
            marginLeft: '5rem',
            marginRight: '5rem',
            '@media (max-width: 639px)': {
              flexDirection: 'column',
              margin: '3rem 2rem 0 2rem',
              paddingBottom: '3rem'
    
            },
        }}>
            {/* left */}
            <Box >
            <Box className='w-[75%] sm:w-[100%]'>
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
        <GreenCard />
    </Box>
  )
}

const GreenCard = () => {
    return (
      <Box className='h-full width-full pt-20 sm:pt-[3rem] flex flex-col items-center'
      sx={{
        backgroundColor: '#F7F7F7'
      }}
      >
           <p className='text-[16px] sm:text-[14px] text-[#5E5E5E]'>
              How To
          </p>
          <p className='text-[28px] sm:text-[22px] text-[#404040] font-[700]'>
              Get Started
          </p>
  
          {/* green card */}
          <Box sx={{
            width: '85%',
            height: '50%',
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'row',
            '@media (max-width: 639px)': {
              flexDirection: 'column'
          },
          }}>
            {/* left */}
              <Box sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: '4rem',
                paddingRight: '6rem',
                backgroundColor: '#608E75',
                borderTopLeftRadius: '1.2rem',
                color: 'white',
              '@media (max-width: 639px)': {
                width: '100%',
                borderTopLeftRadius: '0.8rem',
                borderTopRightRadius: '0.8rem',
                padding: '2rem 1.5rem 2rem 1.5rem',
                
            },
                }}>
                <p className='text-[34px] font-[700] sm:text-[24px]'>
                    Requirements.
                </p>
  
                <ul style={{listStyleType: 'disc'}} className='mt-[1rem] ml-[1rem] leading-[180%] text-[white] font-[600] sm:font-[500] text-[17px] sm:text-[16px]'>
                    <li>Minimum opening balance of N1,000</li>
                    <li>Signed copy of Zikora account opening form</li>
                    <li>Valid identification (Passport, Driving license etc)</li>
                    <li>One passport photograph</li>
                    <li>3 Months utility bill with current address</li>
                    <li>Copy of child’s birth certificate or age declaration</li>


                </ul>
              </Box>
              {/* right */}
              <Box sx={{
                backgroundColor: '#404040',
                width: '50%',
                borderTopRightRadius: '1.2rem',
                '@media (max-width: 639px)': {
                  width: '100%',
                  borderRadius: '0',
              },
  
              }}>
                      <img src={greenCardPic} alt="green card" />
              </Box>
          </Box>
      </Box>
    )
  }

export default ZikoraForKid