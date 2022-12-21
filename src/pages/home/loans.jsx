import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import loanPic1 from '../../images/loan-image1.png'
import loanPic2 from '../../images/loan-image2.png'
import loanPic3 from '../../images/loan-image3.png'




const LoansEmpower = () => {
  return (
    <Box className='h-full pb-28 width-full pt-20 flex flex-col items-center'
      sx={{backgroundImage: `url(${loanPic3})`,
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'right', 
      backgroundPositionY: 'bottom', 

    }}
    >

        {/* column */}
        <Box sx={{
          width: '85%',
          justifySelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '8rem'
        }}>
            {/* first row */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                // border: '1px solid black',
            }}>
                {/* left */}
                <Box >
                  <Box sx={{width: '75%'}}>
                    <img src={loanPic1} alt="acquire loan" />
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
                    fontSize: '33px',
                    fontWeight: 'bold',
                    color: '#404040'
                  }} >
                      Loans-that Empower
                  </Typography>

                  <Typography  sx={{marginTop: '2rem', fontSize: '15px', color:'#5E5E5E', lineHeight: '180%'}}>
                      As a business owner or salary earner, we provide loans that will surely cater to your cash needs. Apply now to get the financial backing you have been waiting for.
                  </Typography>

                  <Button title="Explore Our Loans"  outline={true}
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
                                with: '100%',
                                fontSize: '14px',
                                padding: '5% 28%',

                            },
                        }} />
                </Box>
            </Box>

            {/* second row */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                {/* left */}
                <Box sx={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: '1.5rem'
                 
                  }}>
                  <Typography sx={{
                    fontSize: '33px',
                    fontWeight: 'bold',
                    width: '60% ',
                    color: '#404040'
                  }} >
                      World Class Customer Support
                  </Typography>

                  <Typography  sx={{marginTop: '2rem', fontSize: '15px', color:'#5E5E5E', lineHeight: '180%'}}>
                      Zikora is customer-centric. We have put together a strong team to provide support and guidance to all of our users
                  </Typography>

                  <Button title="Contact Us"  outline={true}
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
                                with: '100%',
                                fontSize: '14px',
                                padding: '5% 28%',

                            },
                        }} />
                </Box>
                {/* right */}
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Box sx={{width: '75%',}}>
                    <img src={loanPic2} alt="customer service" />
                  </Box>
                </Box>
                
            </Box>
        </Box>

    </Box>
  )
}

export default LoansEmpower