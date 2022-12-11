import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../images/loan-image1.png'


const Mission = () => {
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
            color: '#404040'
          }} >
              Our Mission & Vission
          </Typography>

          <Typography  sx={{marginTop: '2rem', fontSize: '17px', color:'#5E5E5E', lineHeight: '180%'}}>
              To provide digital platform designed to modernize the banking and business orientation of an expanding customer base.
          </Typography>

          <Typography  sx={{marginTop: '2rem', fontSize: '17px', color:'#5E5E5E', lineHeight: '180%'}}>
              To be a Catalyst to the human and economic development of communities by providing financial solutions tailored to there need.
          </Typography>
         
        </Box>
    </Box>
  )
}

export default Mission