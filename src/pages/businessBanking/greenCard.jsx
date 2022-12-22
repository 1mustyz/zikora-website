import React from 'react'
import {Box, Typography} from '@mui/material';
import Button from '../../components/button';
import greenCardPic1 from '../../images/business-banking2.png'




const GreenCard = () => {
  return (
    <Box className='h-full width-full pt-20 flex flex-col items-center'
    sx={{
      backgroundColor: '#F7F7F7'
    }}
    >
        <Typography sx={{color: '#5E5E5E'}}>
          Advanced tools
        </Typography>
        <Typography  sx={{
            fontSize: '1.58rem',
            fontWeight: 'bold',
            color: '#404040'

        }}>
            Fearlessly scale to new heights
        </Typography>

        {/* green card */}
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
              paddingRight: '5rem',
              backgroundColor: '#66A681',
              borderTopLeftRadius: '1.2rem',
              color: 'white',
              paddingTop: '4rem',
              paddingBottom: '4rem'
              }}>
              <Typography sx={{
                fontSize: '34px',
                fontWeight: 'bold'
              }} >
                  Earn upto 5% yield on your idel cash
              </Typography>

              <Typography  sx={{marginTop: '1rem', fontSize: '16px'}}>
                Get access to money market funds form your dashboard with Zikora Business Banking.
              </Typography>

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
                            with: '100%',
                            fontSize: '14px',
                            padding: '5% 28%',

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

            }}>
              <p className='text-[#608E75]'>Earn 2% cashback</p>
              <p className='text-[34px] w-[70%] font-[500] text-[#404040]'>Confidently scale your team with Credit cards</p>
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
                            with: '100%',
                            fontSize: '14px',
                            padding: '5% 28%',

                        } }}/>
            </Box>
        </Box>
    </Box>
  )
}

export default GreenCard