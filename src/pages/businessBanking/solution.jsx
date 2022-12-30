import React from 'react'
import {Box} from '@mui/material';
// import Button from '../../components/button';
import loanPic2 from '../../images/bussnes-s6.png'
import loanPic6 from '../../images/loan-page-image3.png'
import loanPic3 from '../../images/bussnes-s5.png'
import loanPic4 from '../../images/bussnes-s4.png'

// import {MdArrowForwardIos} from 'react-icons/md'


const Solution = () => {
  return (
    <Box className='h-full width-full pt-20 sm:pt-[0] flex flex-col items-center'
    sx={{
      // backgroundColor: '#F7F7F7'
    }}
    >
       
        <CustomPlate leftPic={loanPic2}
        rightPic={loanPic6} leftBg="#E8ECE3" rightBg="#404040">
          <>
            <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]'>One Page Solution</p>
              <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] sm:leading-[2rem]'>
                 Search for nearly anything from any page
              </p>
          </>
          <>
            <p className='text-[22px] sm:text-[18px] text-[white] font-[500]'>Easy account creation</p>
              <p className='text-[16px] sm:text-[14px] text-[white] sm:leading-[2rem]'>
              Create new account or login account are one tap away with native iOS & Android apps
              </p>
          </>
        </CustomPlate>

        
        <CustomPlate leftPic={loanPic3}
                rightPic={loanPic4} leftBg="#5E5E5E" rightBg="#F7F7F7">
          <>
            <p className='text-[22px] sm:text-[18px] text-[white] font-[500]'>secure Touch iD</p>
              <p className='text-[16px] sm:text-[14px] text-[white] sm:leading-[2rem]'>
              Use 2 step verification to login your account with desktop logn using touch ID
              </p>
          </>
          <>
            <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]'>Cost Acquisition</p>
              <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] sm:leading-[2rem]'>
              Track every penny where and when you spent. Check all transaction history with one tap from account opening.
              </p>
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
        '@media (max-width: 639px)': {
          flexDirection: 'column',
          width: '100%',
          margin: 0
          
        }

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
            borderBottomLeftRadius: '0.7rem',
            '@media (max-width: 639px)': {
              width: '100%',
              borderRadius: 0,
              paddingLeft: '1.5rem',
              backgroundSize: '6rem'
              
            }
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
            borderBottomRightRadius: '0.7rem',
            '@media (max-width: 639px)': {
              width: '100%',
              borderRadius: 0,
              paddingLeft: '1.5rem',
              backgroundSize: '6rem'
              
            }


          }}>
              {children[1]}
          </Box>
      </Box>
  )
}


export default Solution