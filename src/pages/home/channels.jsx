import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import greenCardPic from '../../images/green-card.png'
import channelsPic1 from '../../images/channels-image1.png'
import channelsPic2 from '../../images/channels-imqge2.png'
import channelsPic3 from '../../images/channels-image3.png'




const Channels = () => {
  return (
    <Box className='h-full width-full pt-20 flex flex-col items-center'
    sx={{backgroundColor: '#F7F7F7'}}
    >
        <Typography sx={{color: '#5E5E5E'}}>
            Our Banking Channels
        </Typography>
        <Typography  sx={{
            fontSize: '1.58rem',
            fontWeight: 'bold',
            color: '#404040'
        }}>
            Several Channels to make your life easy
        </Typography>

        {/* channels card */}
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
              paddingTop: '7rem',
              paddingBottom: '4rem'
              }}>
              <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold'
              }} >
                  Banking Channels  
              </Typography>

              <Typography  sx={{marginTop: '1rem', fontSize: '15px'}}>
                  Extra mile to provide many ways to bank with us easier than ever. 
              </Typography>

              <Button title="Explore Banking Channels" style={{
                        padding: '1rem 1.5rem',
                        background: '#404040',
                        color: 'white',
                        borderRadius: '0.3rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        marginTop: '4rem',
                        width: '70%',
                        fontSize: '14px',
                        '@media (max-width: 639px)': {
                            with: '100%',
                            fontSize: '14px',
                            padding: '5% 28%',

                        },
                    }} />
            </Box>
            {/* right */}
            <Box sx={{
              backgroundColor: '#404040',
              width: '50%',
              borderTopRightRadius: '1.2rem',
              display: 'flex',
              flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap'

            }}>
                    <Box sx={{
                        backgroundColor: '#E8ECE3',
                        height: '50%',
                        width: '50%',
                        paddingLeft: '2.5rem',
                        paddingTop: '3rem',
                        backgroundImage: `url(${channelsPic2})`,
                        backgroundSize: '8rem 8rem',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'right',
                        backgroundPositionY: 'bottom',
                        color: '#404040'

                    }}>
                    <Typography>Internet Bankng...</Typography>
                    </Box>

                    <Box sx={{
                        height: '50%',
                        width: '50%',
                        paddingLeft: '2.5rem',
                        paddingTop: '3rem',
                        backgroundImage: `url(${channelsPic1})`,
                        backgroundSize: '8rem 8rem',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'right',
                        backgroundPositionY: 'bottom',
                        color: 'white'

                    }}>
                    <Typography>Agency Bankng...</Typography>
                    </Box>

                    <Box sx={{
                        height: '50%',
                        width: '50%',
                        paddingLeft: '2.5rem',
                        paddingTop: '3rem',
                        backgroundImage: `url(${channelsPic3})`,
                        backgroundSize: '8rem 8rem',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'right',
                        backgroundPositionY: 'bottom',
                        color: 'white'
                    }}>
                    <Typography>Mobile Bankng...</Typography>
                    </Box>

                    <Box sx={{
                        backgroundColor: 'white',
                        height: '50%',
                        width: '50%',
                        paddingLeft: '2.5rem',
                        paddingTop: '3rem',
                        backgroundImage: `url(${greenCardPic})`,
                        backgroundSize: '10rem 10rem',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'right',
                        backgroundPositionY: 'bottom',
                        color: '#404040'
                    }}>
                    <Typography>ATM Cards...</Typography>
                    </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Channels