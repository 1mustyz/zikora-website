import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import loanPic1 from '../../images/Accounts 3.png'
import fixedBgPic from '../../images/account-image2.png'

const FixedDeposit = () => {
  return (
    <Box sx={{
        backgroundImage: `url(${fixedBgPic})`,
        backgroundRepeat: 'no-repeat',
        paddingTop: '8rem',
        marginBottom: '6rem',
        '@media (max-width: 639px)': {
          paddingTop: '3rem',
          backgroundSize: '17rem',
          margin:0
        },
    }}>
      <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%', 
          margin: 'auto',
          paddingBottom: '5rem',
          borderBottom: '1px solid #CCCCCC',
          '@media (max-width: 639px)': {
            flexDirection: 'column',
            marginTop: '3rem',
            border: 'none'
  
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
              Fixed Deposit Accounts
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
              it all begins with an idea. Maybe you want to launch a business. Maybe you want to turn an hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
          </Typography>

          <Button title="Lean More"  outline={true}
                style={{
                    padding: '1rem 1.5rem',
                    color: '#66A681',
                    border: '1px solid #66A681' ,
                    borderRadius: '0.3rem',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    marginTop: '4rem',
                    width: '30%',
                    fontSize: '14px',
                    "&:hover": {
                      border:"1px solid #564345",
           
                    },
                    '@media (max-width: 639px)': {
                      with: '100%',
                      fontSize: '14px',
                      width: '100%',
                      marginTop: '1.5rem'
                      // padding: '5% 28%',
                  },
                }} linkTo={'/saving-account/'}/>
        </Box>
    </Box>
    </Box>
  )
}

export default FixedDeposit