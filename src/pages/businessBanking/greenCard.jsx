import React from 'react'
import {Box} from '@mui/material';
import Button from '../../components/button';
import greenCardPic1 from '../../images/business-banking2.png'




const GreenCard = () => {
  return (
    <Box className='h-full width-full pt-20 sm:pt-[3rem] flex flex-col items-center'
    sx={{
      backgroundColor: '#F7F7F7'
    }}
    >
        <p className='text-[16px] sm:text-[14px] text-[#5E5E5E]'>
          Advanced tools
        </p>
        <p className='text-[28px] sm:text-[22px] text-[#404040] font-[700]' >
            Fearlessly scale to new heights
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
              padding: '3rem 8rem 3rem 4rem',
              
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
              <p className='text-[34px] font-[700] sm:text-[24px] w-[75%] sm:w-[100%]'  >
                  Earn upto 5% yield on your idel cash
              </p>

              <p className='text-[16px] sm:text-[14px] mt-[1rem]'>
                  Get access to money market funds form your dashboard with Zikora Business Banking.
              </p>

              <Button title="Get Started Banking" style={{
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
                    }} />
            </Box>
            {/* right */}
            <Box sx={{
              width: '50%',
              borderTopRightRadius: '1.2rem',
              backgroundImage: `url(${greenCardPic1})`,
              backgroundSize: '35rem',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '3rem',
              paddingLeft: '3rem',
              gap: '0.5rem',
              '@media (max-width: 639px)': {
                width: '100%',
                borderRadius: '0',
                paddingLeft: '1.5rem',
                backgroundSize: '20rem'
            },

            }}>
              <p className='text-[#608E75] text-[16px] sm:text-[14px]'>Earn 2% cashback</p>
              <p className='text-[34px] sm:text-[24px] w-[70%] sm:w-[90%] font-[500] sm:font-[700] text-[#404040]'>Confidently scale your team with Credit cards</p>
              <Button title="Learn More"  style={{
                        padding: '1rem 1.5rem',
                        color: '#404040',
                        borderRadius: '0.3rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        marginTop: '2rem',
                        width: '30%',
                        fontSize: '14px',
                        '@media (max-width: 639px)': {
                          width: '50%',
                          fontSize: '14px',
                          padding: '0 0',
                          margin: 'auto',
                          marginTop: '0.5rem',
                          marginBottom: '2.2rem'

                      }, }}/>
            </Box>
        </Box>
    </Box>
  )
}

export default GreenCard