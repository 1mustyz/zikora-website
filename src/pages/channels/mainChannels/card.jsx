import React from 'react'
import {Box, Typography, Divider} from '@mui/material';
import Button from '../../../components/button';
import channel4Pic from '../../../images/Channels 4.png'
import channel5Pic from '../../../images/Channels 5.png'
import loanPic3 from '../../../images/loan-image3.png'




const Card = () => {
  return (
    <Box className='h-full pb-28 width-full pt-20 flex flex-col items-center'>

        {/* column */}
        <Box  sx={{
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
                    <img src={channel4Pic} alt="acquire loan" />
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
                      Internet Banking
                  </Typography>

                  <Typography  sx={{marginTop: '2rem', fontSize: '17px', color:'#5E5E5E', lineHeight: '180%'}}>
                    Perform all normal bank transactions from any location.Our internet banking will guide you in every step you need to achieve your aims.
                  </Typography>

                  <Button title="Learn More"  outline={true}
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

            {/* second row */}
            <Box  sx={{
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
                    fontSize: '35px',
                    fontWeight: 'bold',
                    width: '60% ',
                    color: '#404040'
                  }} >
                      ATM Cards
                  </Typography>

                  <Typography  sx={{marginTop: '2rem', fontSize: '17px', color:'#5E5E5E', lineHeight: '180%'}}>
                    With our Verve card, you can perform a lot of transactions both online and offline.
                  </Typography>

                  <Button title="Learn More"  outline={true}
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
                {/* right */}
                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                  <Box sx={{width: '75%',}}>
                    <img src={channel5Pic} alt="customer service" />
                  </Box>
                </Box>
                
            </Box>
        </Box>

    </Box>
  )
}

export default Card