import React from 'react'
import {Box} from '@mui/material';
import Button from '../../components/button';
import accountPic1 from '../../images/account-image1.png'
import accountPic2 from '../../small-images/phone-view-bg-top.png'




const Account = () => {
  return (
    <Box className='h-full pb-28 sm:pb-[0] width-full pt-40 sm:pt-[3rem] flex flex-col items-center'
      sx={{backgroundImage: `url(${accountPic2})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'left', 
      backgroundPositionY: 'top', 

    }}
    >

       
            {/* first row */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '85%',
                '@media (max-width: 639px)': {
                  flexDirection: 'column',
                  width: '90%',
                  
              },
            }}>
                {/* left */}
                <Box >
                  <Box className='w-[75%] sm:w-[100%]'>
                    <img src={accountPic1} alt="acquire loan" />
                  </Box>
                </Box>
                {/* right */}
                <Box sx={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: '1.5rem',
                  '@media (max-width: 639px)': {
                    margin: '0',
                    width: '100%'
                },
                 
                  }}>
                  <p className='text-[34px] font-[700] sm:mt-[2rem] sm:text-[24px] sm:w-[100%]'>
                      Accounts that fit to you
                  </p>

                  <p className='mt-[1rem] text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[180%]'>
                    Zikora Offers Several Account Types to cater to your specific needs
                  </p>

                  <Button title="Explore Accounts"  outline={true}
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
                              width: '100%',
                              fontSize: '14px',
                              padding: '0.8rem 2rem',
                              marginTop: '1.5rem',
                              marginBottom: '2.2rem'
    
                          },
                        }} linkTo={'/account/'}/>
                </Box>
            </Box>

            
        

    </Box>
  )
}

export default Account