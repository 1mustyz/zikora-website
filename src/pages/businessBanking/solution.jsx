import React from 'react'
import {Box, Typography, Button} from '@mui/material';
// import Button from '../../components/button';
import loanPic2 from '../../images/bussnes-s6.png'
import loanPic6 from '../../images/loan-page-image3.png'
import loanPic3 from '../../images/bussnes-s5.png'
import loanPic4 from '../../images/bussnes-s4.png'

import {MdArrowForwardIos} from 'react-icons/md'


const Solution = () => {
  return (
    <Box className='h-full width-full pt-20 flex flex-col items-center'
    sx={{
      // backgroundColor: '#F7F7F7'
    }}
    >
       
        <CustomPlate leftPic={loanPic2}
        rightPic={loanPic6} leftBg="#E8ECE3" rightBg="#404040">
          <>
            <Typography sx={{fontSize: '22px', color: '#404040', fontWeight: '500'}}>One Page Solution</Typography>
              <Typography sx={{color: '#5E5E5E', fontSize: '16px', lineHeight: '2rem'}}>
                 Search for nearly anything from any page
              </Typography>
          </>
          <>
            <Typography sx={{fontSize: '22px', color: 'white', fontWeight: '500'}}>Easy account creation</Typography>
              <Typography sx={{color: 'white', fontSize: '16px', lineHeight: '2rem'}}>
              Create new account or login account are one tap away with native iOS & Android apps
              </Typography>
          </>
        </CustomPlate>

        
        <CustomPlate leftPic={loanPic3}
                rightPic={loanPic4} leftBg="#5E5E5E" rightBg="#F7F7F7">
          <>
            <Typography sx={{font4ize: '22px', color: 'white', fontWeight: '500'}}>secure Touch iD</Typography>
              <Typography sx={{color: 'white', fontSize: '16px', lineHeight: '2rem'}}>
              Use 2 step verification to login your account with desktop logn using touch ID
              </Typography>
          </>
          <>
            <Typography sx={{fontSize: '22px', color: '#404040', fontWeight: '500'}}>Cost Acquisition</Typography>
              <Typography sx={{color: '#5E5E5E', fontSize: '16px', lineHeight: '2rem'}}>
              Track every penny where and when you spent. Check all transaction history with one tap from account opening.
              </Typography>
          </>
        </CustomPlate>
      
    </Box>
  )
}


const CustomPlate = ({ leftBg, rightBg, leftPic, rightPic, children}) => {
  return (
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
            padding: '4rem',
            paddingBottom: '9rem',

            backgroundColor: leftBg,
            // borderTopLeftRadius: '1rem',
            color: 'white',
            gap: '2rem',
            backgroundImage: `url(${leftPic})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            backgroundPositionY: 'bottom',
            borderTopLeftRadius: '0.7rem',
            borderBottomLeftRadius: '0.7rem'
            }}>
             {children[0]}
           
          </Box>
          {/* right */}
          <Box sx={{
            backgroundColor: rightBg,
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            padding: '4rem',
            paddingBottom: '9rem',
            gap: '2rem',
            backgroundImage: `url(${rightPic})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            backgroundPositionY: 'bottom',
            borderTopRightRadius: '0.7rem',
            borderBottomRightRadius: '0.7rem'


          }}>
              {children[1]}
          </Box>
      </Box>
  )
}


export default Solution