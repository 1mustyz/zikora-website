import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import greenCardPic from '../../images/green-card.png'



const GreenCard = () => {
  return (
    <Box className='h-full width-full pt-20 flex flex-col items-center'
    sx={{
      backgroundColor: '#F7F7F7'
    }}
    >
        <Typography sx={{color: '#5E5E5E'}}>
            Easiest Way to Make Payments
        </Typography>
        <Typography  sx={{
            fontSize: '1.78rem',
            fontWeight: 'bold'
        }}>
            Zikora Green Card
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
              paddingRight: '12rem',
              backgroundColor: '#66A681',
              borderTopLeftRadius: '1.2rem',
              color: 'white'
              }}>
              <Typography sx={{
                fontSize: '36px',
                fontWeight: 'bold'
              }} >
                  More than Just a Debit Card.
              </Typography>

              <Typography  sx={{marginTop: '1rem', fontSize: '18px'}}>
                  Enjoy both Offline and Online Payment
              </Typography>

              <Button title="Get Zikora Green Card" style={{
                        padding: '1rem 1.5rem',
                        background: '#404040',
                        color: 'white',
                        borderRadius: '0.3rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        marginTop: '4rem',
                        width: '70%',
                        fontSize: '16px',
                        '@media (max-width: 639px)': {
                            with: '100%',
                            fontSize: '16px',
                            padding: '5% 28%',

                        },
                    }} />
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

export default GreenCard