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
        marginTop: '7rem',
        '@media (max-width: 639px)': {
          flexDirection: 'column',
          marginTop: '3rem',
          paddingBottom: '3rem'

        },
        // border: '1px solid black',
    }}>
        {/* left */}
        <Box >
          <Box className='w-[75%] sm:w-[100%]'>
            <img src={loanPic1} alt="acquire loan" />
          </Box>
        </Box>
        {/* right */}
        <Box sx={{
          width: '40%',
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
            '@media (max-width: 639px)': {
              fontSize: '24px',
              width: '100%'
            },
          }} >
              Current Accounts
          </Typography>

          <Typography  sx={{
            marginTop: '2rem', 
            fontSize: '15px', 
            color:'#5E5E5E', 
            '@media (max-width: 639px)': {
              marginTop: '0.5rem',
              fontSize: '14px',
            },
            }}>
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
                      '@media (max-width: 639px)': {
                        with: '100%',
                        fontSize: '14px',
                        width: '100%',
                        marginTop: '1.5rem'
                        // padding: '5% 28%',

                    },

                    },
                }} />
        </Box>
    </Box>
    </Box>
  )
}

export default CurrentAccount