import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../images/esusu 1.png'
import greenCardPic from '../../images/esusu 2.png'
import GreenCard from '../../components/GreenCard';

const ZikoraEsusu = () => {
  return (
    <Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '8rem',
            marginLeft: '5rem',
            marginRight: '5rem',
            justifyContent: 'space-between',
            '@media (max-width: 639px)': {
              flexDirection: 'column',
              margin: '3rem 2rem 0 2rem',
              paddingBottom: '3rem'
    
            },
        }}>
            {/* left */}
            <Box >
            <Box className='w-[100%] sm:w-[100%]'>
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
                fontSize: '34px',
                fontWeight: 'bold',
                color: '#404040',
                '@media (max-width: 639px)': {
                  fontSize: '24px',
                  width: '100%'
                },
            }} >
                Zikora Esusu
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
              Save regularly with your friends and community. Each member of your group contributes a set amount monthly and receives a pre-assigned slot in which they can access the funds. This will be automated via our Digital Banking Suite. 
            </Typography>

            <ul style={{listStyleType: 'disc'}} className='mt-[2rem] ml-[1rem] leading-[180%] text-[#242020] sm:text-[14px]'>
                <li>Each group has a maximum of 12 contributors.</li>
                <li>Participants will receive bulk payments once their slot has arrived.</li>
            </ul>

                    
            </Box>
        </Box>
        <GreenCard greenCardPic={greenCardPic}>
          <li>All contributors must have an operational Zikora Account.</li>
          <li>Signed copy of the Zikora Esusu account opening form.</li>
        </GreenCard>
    </Box>
  )
}

export default ZikoraEsusu