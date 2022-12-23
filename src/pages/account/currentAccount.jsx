import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import loanPic1 from '../../images/Accounts 1.png'

const CurrentAccount = () => {
  return (
    <Box >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '90%', 
        margin: 'auto',
        marginTop: '7rem'
        // border: '1px solid black',
    }}>
        {/* left */}
        <Box >
          <Box sx={{width: '75%'}}>
            <img src={loanPic1} alt="acquire loan" />
          </Box>
        </Box>
        {/* right */}
        <Box sx={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '1.5rem'
         
          }}>
          <Typography sx={{
            fontSize: '33px',
            fontWeight: 'bold',
            color: '#404040'
          }} >
              Current Accounts
          </Typography>

          <Typography  sx={{marginTop: '2rem', fontSize: '15px', color:'#5E5E5E', lineHeight: '180%'}}>
              We provide multiple types of current accounts give overdraft facilities, regular transaction capabilities and customer financing for urgent business needs.
          </Typography>

          <Button title="View All Accounts"  outline={true}
                style={{
                    padding: '1rem 1.5rem',
                    color: '#66A681',
                    border: '1px solid #66A681' ,
                    borderRadius: '0.3rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    marginTop: '4rem',
                    width: '40%',
                    fontSize: '14px',
                    "&:hover": {
                      border:"1px solid #564345",
           
                    },
                    '@media (max-width: 639px)': {
                        with: '100%',
                        fontSize: '14px',
                        padding: '5% 28%',

                    },
                }} />
        </Box>
    </Box>
    </Box>
  )
}

export default CurrentAccount