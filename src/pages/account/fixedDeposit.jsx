import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import loanPic1 from '../../images/loan-image1.png'
import fixedBgPic from '../../images/account-image2.png'
import Divider from '../../components/divider';

const FixedDeposit = () => {
  return (
    <Box sx={{
        backgroundImage: `url(${fixedBgPic})`,
        backgroundRepeat: 'no-repeat',
        paddingTop: '8rem',
        marginBottom: '6rem'
    }}>
      <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%', 
          margin: 'auto',
          paddingBottom: '5rem',
          borderBottom: '1px solid #CCCCCC'
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
            fontSize: '35px',
            fontWeight: 'bold',
            color: '#404040'
          }} >
              Fixed Deposit Accounts
          </Typography>

          <Typography  sx={{marginTop: '2rem', fontSize: '17px', color:'#5E5E5E', lineHeight: '180%'}}>
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
                    fontSize: '16px',
                    "&:hover": {
                      border:"1px solid #564345",
           
                    },
                    '@media (max-width: 639px)': {
                        with: '100%',
                        fontSize: '16px',
                        padding: '5% 28%',

                    },
                }} />
        </Box>
    </Box>
    </Box>
  )
}

export default FixedDeposit