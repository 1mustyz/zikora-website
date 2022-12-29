import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../../images/Channels 2.png'


const CompleteBanking = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '8rem',
        marginLeft: '5rem',
        marginRight: '5rem',
        '@media (max-width: 639px)': {
          flexDirection: 'column',
          margin: '2rem 1.5rem 0 1.5rem',
          
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
            fontSize: '33px',
            fontWeight: 'bold',
            color: '#404040',
            width: '70%',
            '@media (max-width: 639px)': {
              fontSize: '24px',
              width: '90%'
            },
          }} >
              Replace Heading Here
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
            Lorem ipsum digital Banking tools are modern and powerful; giving users the power to bank from anywhere at anytime. USSD, Mobile Apps and Internet banking utilize high level AI tools and features to provide the best service to our valued customers. Our Digital Banking tools are modern and powerful; giving users the power to bank from anywhere at anytime. 
          </Typography>
                   
        </Box>
    </Box>
  )
}

export default CompleteBanking