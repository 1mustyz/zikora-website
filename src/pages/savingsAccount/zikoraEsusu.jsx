import React from 'react'
import {Box, Typography,} from '@mui/material';
import loanPic1 from '../../images/esusu 1.png'
import greenCardPic from '../../images/esusu 2.png'

const ZikoraEsusu = () => {
  return (
    <Box>

        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '8rem',
            marginLeft: '5rem',
            marginRight: '5rem'
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
                fontSize: '34px',
                fontWeight: 'bold',
                color: '#404040'
            }} >
                Zikora Esusu
            </Typography>

            <Typography  sx={{marginTop: '2rem', fontSize: '15px', color:'#5E5E5E', lineHeight: '180%'}}>
              Save regularly with your friends and community. Each member of your group contributes a set amount monthly and receives a pre-assigned slot in which they can access the funds. This will be automated via our Digital Banking Suite. 
            </Typography>

            <ul style={{listStyleType: 'disc'}} className='mt-[2rem] ml-[1rem] leading-[180%] text-[#242020]'>
                <li>Each group has a maximum of 12 contributors.</li>
                <li>Participants will receive bulk payments once their slot has arrived.</li>
            </ul>

                    
            </Box>
        </Box>
        <GreenCard />
    </Box>
  )
}

const GreenCard = () => {
    return (
      <Box className='h-full width-full pt-20 flex flex-col items-center'
      sx={{
        backgroundColor: '#F7F7F7'
      }}
      >
          <Typography sx={{color: '#5E5E5E'}}>
              Lorem ipsum
          </Typography>
          <Typography  sx={{
              fontSize: '1.58rem',
              fontWeight: 'bold',
              color: '#404040'
  
          }}>
              Lorem ipsum dummy text
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
                paddingRight: '6rem',
                backgroundColor: '#608E75',
                borderTopLeftRadius: '1.2rem',
                color: 'white'
                }}>
                <Typography sx={{
                  fontSize: '34px',
                  fontWeight: 'bold'
                }} >
                    Requirements.
                </Typography>
  
                <ul style={{listStyleType: 'disc'}} className='mt-[2rem] ml-[1rem] leading-[180%] text-[white] font-[600] text-[17px]'>
                    <li>All contributors must have an operational Zikora Account.</li>
                    <li>Signed copy of the Zikora Esusu account opening form.</li>
                </ul>
              </Box>
              {/* right */}
              <Box sx={{
                backgroundColor: '#404040',
                width: '50%',
                borderTopRightRadius: '1.2rem'
  
              }}>
                      <img src={greenCardPic} alt="green card" />
              </Box>
          </Box>
      </Box>
    )
  }

export default ZikoraEsusu