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
        <p className='text-[#5E5E5E] text-[16px] sm:text-[14px]'>
            Our Banking Channels
        </p>
        <p className='text-[28px] sm:text-[22px] font-[700] text-[#404040] sm:w-[80%] text-center' >
            Several Channels to make your life easy
        </p>

        {/* channels card */}
        <Box sx={{
          width: '85%',
          height: '50%',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'row',
          '@media (max-width: 639px)': {
            flexDirection: 'column'
        },
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
              paddingBottom: '4rem',
              '@media (max-width: 639px)': {
                width: '100%',
                borderTopLeftRadius: '0.8rem',
                borderTopRightRadius: '0.8rem',
                padding: '2rem 1.5rem 0 1.5rem',


            },
              }}>
              <p className='text-[34px] font-[700]  sm:text-[24px] w-[80%]'>
                  Banking Channels  
              </p>

              <p  className='text-[16px] sm:text-[14px] mt-[1rem]'>
                We've gone the extra mile to make the many ways to bank with us easier than ever. 
              </p>

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
                          width: '100%',
                          fontSize: '14px',
                          padding: '0.8rem 2rem',
                          marginTop: '1.5rem',
                          marginBottom: '2.2rem'

                      },
                    }} linkTo={'/main-channels/'}/>
            </Box>
            {/* right */}
            <Box sx={{
              backgroundColor: '#404040',
              width: '50%',
              borderTopRightRadius: '1.2rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              '@media (max-width: 639px)': {
                width: '100%',
                borderTopRightRadius: '0',
                borderBottomLeftRadius: '1.2rem',
            },

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
                        color: '#404040',
                        '@media (max-width: 639px)': {
                        backgroundSize: '4rem 4rem',
                        paddingLeft: '1rem',
                        paddingTop: '1rem',
                        paddingBottom: '4rem'

                          
                      },

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
                        color: 'white',
                        '@media (max-width: 639px)': {
                          backgroundSize: '4rem 4rem',
                          paddingLeft: '1rem',
                          paddingTop: '1rem',
                          paddingBottom: '4rem'
  
                            
                        },

                    }}>
                    <Typography>Agency Bankng...</Typography>
                    </Box>

                    <Box sx={{
                        height: '50%',
                        width: '50%',
                        paddingLeft: '2.5rem',
                        paddingTop: '3rem',
                        backgroundImage: `url(${channelsPic3})`,
                        backgroundSize: '5rem 8rem',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'right',
                        backgroundPositionY: 'bottom',
                        color: 'white',
                        '@media (max-width: 639px)': {
                          backgroundSize: '4rem 4rem',
                          paddingLeft: '1rem',
                          paddingTop: '1rem',
                          paddingBottom: '4rem'
  
                            
                        },
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
                        color: '#404040',
                        '@media (max-width: 639px)': {
                          backgroundSize: '4rem 4rem',
                          paddingLeft: '1rem',
                          paddingTop: '1rem',
                          paddingBottom: '4rem'
  
                            
                        },
                    }}>
                    <Typography>ATM Cards...</Typography>
                    </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Channels