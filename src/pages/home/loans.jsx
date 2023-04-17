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
          rowGap: '8rem',
          '@media (max-width: 639px)': {
            rowGap: '4rem',
            
          },
          
        }}>
            {/* first row */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '100px',
                '@media (max-width: 639px)': {
                  flexDirection: 'column',
                  gap: 0
                },
            }}>
                {/* left */}
                <Box >
                  <Box className='sm:w-[100%]'>
                    <img src={loanPic1} alt="acquire loan" />
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
                    width: '100%',
                    margin: '0',
                    marginTop: '2rem'
                  },
                  }}>
                  <Typography sx={{
                    fontSize: '33px',
                    fontWeight: 'bold',
                    color: '#404040',
                    '@media (max-width: 639px)': {
                      fontSize: '24px',
                      width: '100%'
                    },
                  }} >
                      Loans that Empower
                  </Typography>

                  <Typography  sx={{
                    marginTop: '2rem', 
                    fontSize: '15px', 
                    color:'#5E5E5E', 
                    lineHeight: '180%',
                    '@media (max-width: 639px)': {
                      marginTop: '0.5rem',
                      fontSize: '14px',
                    },
                    }}>
                     Business owner or salary earner, we provide loans to meet your needs and support your goals. Apply now to get the financial backing you have been waiting for
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
                                width: '100%',
                                marginTop: '1.5rem'
                                // padding: '5% 28%',

                            },
                        }} linkTo={'/loans/'}/>
                </Box>
            </Box>

            {/* second row */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                '@media (max-width: 639px)': {
                  flexDirection: 'column-reverse'
                },
            }}>
                {/* left */}
                <Box sx={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: '1.5rem',
                  '@media (max-width: 639px)': {
                    margin: '0',
                    width: '100%',
                    marginTop: '2rem'
                  },
                 
                  }}>
                  <Typography sx={{
                    fontSize: '33px',
                    fontWeight: 'bold',
                    width: '60% ',
                    color: '#404040',
                    '@media (max-width: 639px)': {
                      fontSize: '24px',
                      width: '80%',

                    },
                  }} >
                      World Class Customer Support
                  </Typography>

                  <Typography  sx={{
                    marginTop: '2rem', 
                    fontSize: '15px', 
                    color:'#5E5E5E', 
                    lineHeight: '180%',
                    '@media (max-width: 639px)': {
                      marginTop: '0.5rem',
                      fontSize: '14px',
                    },
                    }}>
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
                              width: '100%',
                              marginTop: '1.5rem'
                              // padding: '5% 28%',
                          },
                        }} linkTo={'/contact/'}/>
                </Box>
                {/* right */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: 'flex-end',
                  '@media (max-width: 639px)': {
                    justifyContent: 'center',
                  },
                  }}>
                  <Box className='w-[75%] sm:w-[100%]'>
                    <img src={loanPic2} alt="customer service" />
                  </Box>
                </Box>
                
            </Box>
        </Box>

    </Box>
  )
}

export default LoansEmpower