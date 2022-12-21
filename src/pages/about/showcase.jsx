import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import aboutPic2 from '../../images/about-image2.png'



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
            fontSize: '1.58rem',
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
              paddingRight: '8rem',
              backgroundColor: '#66A681',
              borderTopLeftRadius: '1.2rem',
              color: 'white',
              }}>
              <Typography sx={{
                fontSize: '28px',
                fontWeight: 'bold',
                fontStyle: 'italic'
              }} >
                  "Zikora was created to show people the possibilities of forward thinking banking..."
              </Typography>

              <Typography  sx={{marginTop: '2rem', fontSize: '16px'}}>
                  - Bernadine Okeke
              </Typography>

             
            </Box>
            {/* right */}
            <Box sx={{
              backgroundColor: '#404040',
              width: '50%',
              borderTopRightRadius: '1.2rem',


            }}>
                    <img className='rounded-tr-[1.2rem]' src={aboutPic2} alt="green card" />
            </Box>
        </Box>
    </Box>
  )
}

export default ShowCase