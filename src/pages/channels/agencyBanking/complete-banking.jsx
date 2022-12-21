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
            fontSize: '35px',
            fontWeight: 'bold',
            color: '#404040',
            width: '70%'
          }} >
              Replace Heading Here
          </Typography>

          <Typography  sx={{marginTop: '2rem', fontSize: '17px', color:'#5E5E5E', lineHeight: '180%'}}>
            Lorem ipsum digital Banking tools are modern and powerful; giving users the power to bank from anywhere at anytime. USSD, Mobile Apps and Internet banking utilize high level AI tools and features to provide the best service to our valued customers. Our Digital Banking tools are modern and powerful; giving users the power to bank from anywhere at anytime. 
          </Typography>
                   
        </Box>
    </Box>
  )
}

export default CompleteBanking