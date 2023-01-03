import React from 'react'
import {Box} from '@mui/material';
import Button from '../../components/button';
import greenCardPic from '../../images/Accounts 2.png'



const ShowCase = () => {
  return (
    <Box className='h-full width-full pt-20 sm:pt-[3rem] flex flex-col items-center'
    sx={{
      backgroundColor: '#F7F7F7'
    }}
    >
        <p className='text-[16px] sm:text-[14px] text-[#5E5E5E]'>
            Get To 
        </p>
        <p className='text-[28px] sm:text-[22px] text-[#404040] font-[700]'>
            Save More
        </p>

        {/* green card */}
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
              paddingRight: '4rem',
              backgroundColor: '#66A681',
              borderTopLeftRadius: '1.2rem',
              color: 'white',
              '@media (max-width: 639px)': {
                width: '100%',
                borderTopLeftRadius: '0.8rem',
                borderTopRightRadius: '0.8rem',
                padding: '2rem 1.5rem 0 1.5rem',
            },
              }}>
              <p className='text-[34px] font-[700] sm:text-[24px]'  >
                  Savings Accounts
              </p>

              <p className='text-[16px] sm:text-[14px] mt-[1rem] leading-[180%]'>
                  Zikora provides accounts that enables our users meet there different saving and spending criteria. Our saving options are designed to make the most of your unused cash; we make it work for you.
              </p>

              <Button title="Get to Know More" style={{
                        padding: '1rem 1.5rem',
                        background: '#404040',
                        color: 'white',
                        borderRadius: '0.3rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        marginTop: '3rem',
                        width: '45%',
                        fontSize: '14px',
                        '@media (max-width: 639px)': {
                            width: '100%',
                            padding: '0.8rem 2rem',
                            marginTop: '1.5rem',
                            marginBottom: '2.2rem'

                        },
                    }} linkTo={'/saving-account/'}/>
            </Box>
            {/* right */}
            <Box sx={{
              backgroundColor: '#404040',
              width: '50%',
              borderTopRightRadius: '1.2rem',
              '@media (max-width: 639px)': {
                width: '100%',
                borderRadius: '0',
            },
            }}>
                    <img src={greenCardPic} alt="green card" />
            </Box>
        </Box>
    </Box>
  )
}

export default ShowCase