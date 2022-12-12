import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import greenCardPic from '../../images/green-card.png'



const ShowCase = () => {
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
            fontSize: '1.78rem',
            fontWeight: 'bold',
            color: '#404040'

        }}>
            Replace short heading
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
              paddingRight: '4rem',
              backgroundColor: '#66A681',
              borderTopLeftRadius: '1.2rem',
              color: 'white'
              }}>
              <Typography sx={{
                fontSize: '36px',
                fontWeight: 'bold'
              }} >
                  Savings Accounts
              </Typography>

              <Typography  sx={{marginTop: '2rem', fontSize: '18px', lineHeight: '2rem'}}>
                  Zikora provides accounts that enables our users meet there different saving and spending criteria. Our saving options are designed to make the most of your unused cash; we make it work for you.
              </Typography>

              <Button title="Get to Know More" style={{
                        padding: '1rem 1.5rem',
                        background: '#404040',
                        color: 'white',
                        borderRadius: '0.3rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        marginTop: '3rem',
                        width: '45%',
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

export default ShowCase