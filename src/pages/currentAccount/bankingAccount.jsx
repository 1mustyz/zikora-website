import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../images/business-banking1.png'
import greenCardPic from '../../images/Business banking 2.png'


const BankingAccount = () => {
  return (
    <Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '8rem',
            marginLeft: '5rem',
            marginRight: '5rem'
        }}>
            {/* left */}
            <Box >
            <Box sx={{width: '75%'}}>
                <img src={loanPic1} alt="acquire loan" />
            </Box>
            </Box>
            {/* right */}
            <Box sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '1.5rem'
            
            }}>
            <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold',
                color: '#404040'
            }} >
                Zikora Business Banking
            </Typography>

            <Typography  sx={{marginTop: '2rem', fontSize: '15px', color:'#5E5E5E', lineHeight: '180%'}}>
            Whether you are starting a business or have an operational business that is ready to expand, Zikora has a team of financial advisors and banking tools to help you achieve your goals.
            </Typography>

            <ul style={{listStyleType: 'disc'}} className='mt-[2rem] ml-[1rem] leading-[180%] text-[#242020]'>
                <li>Access to unlimited withdrawals</li>
                <li>Access to Zikora financial advisors</li>
            </ul>

                    
            </Box>
        </Box>
        <GreenCard />
    </Box>
  )
}

const GreenCard = () => {
    return (
      <Box className='h-full width-full pt-20 flex flex-col items-center'
      sx={{
        backgroundColor: '#F7F7F7'
      }}
      >
          <Typography sx={{color: '#5E5E5E'}}>
              Lorem ipsum
          </Typography>
          <Typography  sx={{
              fontSize: '1.58rem',
              fontWeight: 'bold',
              color: '#404040'
  
          }}>
              Lorem ipsum dummy text
          </Typography>
  
          {/* green card */}
          <Box sx={{
            width: '85%',
            height: '50%',
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'row',
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
                color: 'white'
                }}>
                <Typography sx={{
                  fontSize: '34px',
                  fontWeight: 'bold'
                }} >
                    Requirements.
                </Typography>
  
                <ul style={{listStyleType: 'disc'}} className='mt-[2rem] ml-[1rem] leading-[180%] text-[white] font-[600] text-[17px]'>
                    <li>Minimum opening balance of N5,000</li>
                    <li>Valid identification (Passport, Driving license etc)</li>
                    <li>Account opening form & One passport photograph</li>
                    <li>3 Months utility bill with current address</li>
                    <li>2 duly signed & completed reference forms</li>


                </ul>
              </Box>
              {/* right */}
              <Box sx={{
                backgroundColor: '#404040',
                width: '50%',
                borderTopRightRadius: '1.2rem'
  
              }}>
                      <img src={greenCardPic} alt="green card" />
              </Box>
          </Box>
      </Box>
    )
  }

export default BankingAccount