import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../../components/button';
import channel1Pic from '../../../images/Channels 1.png'
import channel2Pic from '../../../images/Channels 2.png'


const MobileBanking = () => {
  return (
    <Box className='h-full pb-28 width-full pt-20 flex flex-col items-center'>

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
                    <img src={channel1Pic} alt="acquire loan" />
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
                      Mobile Banking
                  </Typography>

                  <Typography  sx={{marginTop: '2rem', fontSize: '15px', color:'#5E5E5E', lineHeight: '180%'}}>
                  Our Digital Banking tools are modern and powerful; giving users the power to bank from anywhere at anytime. USSD, Mobile Apps and Internet banking utilize high level AI tools and features to provide the best service to our valued customers.
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
                      Agency Banking
                  </Typography>

                  <Typography  sx={{marginTop: '2rem', fontSize: '15px', color:'#5E5E5E', lineHeight: '180%'}}>
                  Zikora Pay is always near you to help you with day-to-day financial transactions without visiting the bank.
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
                    <img src={channel2Pic} alt="customer service" />
                  </Box>
                </Box>
                
            </Box>
        </Box>

    </Box>
  )
}

export default MobileBanking