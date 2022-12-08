import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import accountPic1 from '../../images/account-image1.png'
import accountPic2 from '../../images/account-image2.png'




const Account = () => {
  return (
    <Box className='h-full pb-28 width-full pt-40 flex flex-col items-center'
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
         
                // border: '1px solid black',
            }}>
                {/* left */}
                <Box >
                  <Box sx={{width: '75%'}}>
                    <img src={accountPic1} alt="acquire loan" />
                  </Box>
                </Box>
                {/* right */}
                <Box sx={{
                  width: '50%',
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
                      Accounts that's fit to you
                  </Typography>

                  <Typography  sx={{marginTop: '2rem', fontSize: '17px', color:'#5E5E5E', lineHeight: '180%'}}>
                      Replace accounts related text here. Zikora Offers Several Account Types to cater to your specific needs
                  </Typography>

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

export default Account