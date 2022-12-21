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
            fontSize: '34px',
            fontWeight: 'bold',
            color: '#404040'
          }} >
              Replace heading here
          </Typography>

          <Typography  sx={{marginTop: '2rem', fontSize: '16px', color:'#5E5E5E', lineHeight: '180%'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non rem pariatur sit libero assumenda quidem quod vero, dolor incidunt dolores doloribus hic exercitationem tempora placeat deserunt dolore harum fugiat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non rem pariatur sit libero assumenda quidem quod vero, dolor incidunt dolores doloribus hic exercitationem tempora placeat deserunt dolore harum fugiat.
          </Typography>

                  
        </Box>
    </Box>
  )
}

export default Mission