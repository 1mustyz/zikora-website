import React from 'react'
import {Box, Typography, Button} from '@mui/material';
// import Button from '../../components/button';
import loanPic2 from '../../images/loan-page-image2.png'
import loanPic3 from '../../images/loan-page-image3.png'
import loanPic4 from '../../images/loan-page-image4.png'
import loanPic5 from '../../images/loan-page-image5.png'
import loanPic6 from '../../images/loan-page-image6.png'
import loanPic7 from '../../images/loan-page-image7.png'

import {MdArrowForwardIos} from 'react-icons/md'


const ShowCase = () => {
const buttonMobileView = {
  fontSize: '14px',
  width: '50%',
  minHeight: 0, minWidth: 0, padding: 0,
  marginTop: '1rem'
}
  return (
    <Box className='h-full width-full pt-20 sm:pt-[2rem] flex flex-col items-center'
    sx={{
      // backgroundColor: '#F7F7F7'
    }}
    >
       
        <CustomPlate leftPic={loanPic2}
        rightPic={loanPic6} leftBg="#E8ECE3" rightBg="#404040">
          <>
            <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Zikora Overdraft</p>
              <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]' >
              Short on cash? No problem. Zikora provides a short time credit line to users, allowing payback period of up to 30 days. No hassle
              </p>
              <Button sx={{
                 textTransform: 'none',
                 width: '30%',
                 color: '#66A681',
                 gap: '1rem',
                 fontSize: '16px',
                 '@media (max-width: 639px)': {
                  ...buttonMobileView
               }
                 }}> <Typography sx={{fontWeight: 'bold'}}>Apply Loan</Typography> <MdArrowForwardIos/> </Button>
          </>
          <>
            <p className='text-[22px] sm:text-[18px] text-[white] font-[500]' >Corporate Cash Advance</p>
              <p className='text-[16px] sm:text-[14px] text-[white] leading-[2rem]' >
                We provide cash loans to help solve the urgent working capital needs of our user's businesses.
              </p>
              <Button sx={{
                 textTransform: 'none',
                 width: '30%',
                 color: '#66A681',
                 gap: '1rem',
                 fontSize: '16px',
                 '@media (max-width: 639px)': {
                  ...buttonMobileView
               }
                 }}> <Typography sx={{fontWeight: 'bold'}}>Apply Loan</Typography> <MdArrowForwardIos/> </Button>
          </>
        </CustomPlate>

        
        <CustomPlate leftPic={loanPic3}
                rightPic={loanPic4} leftBg="#F7F7F7" rightBg="#E8ECE3">
          <>
            <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Retail Loans</p>
              <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]' >
              We provide quick loans to our trusted users to ease the pressures that may be facing from their urgent financial needs.
              </p>
              <Button sx={{
                 textTransform: 'none',
                 width: '30%',
                 color: '#66A681',
                 gap: '1rem',
                 fontSize: '16px',
                 '@media (max-width: 639px)': {
                  ...buttonMobileView
               }
                 }}> <Typography sx={{fontWeight: 'bold'}}>Apply Loan</Typography> <MdArrowForwardIos/> </Button>
          </>
          <>
            <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Asset Acquisation Financing</p>
              <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]'>
              Zikora will provide financial credit to worthy users and businesses looking to purchase tangible assets for personal and/or operational use.
              </p>
              <Button sx={{
                 textTransform: 'none',
                 width: '30%',
                 color: '#66A681',
                 gap: '1rem',
                 fontSize: '16px',
                 '@media (max-width: 639px)': {
                  ...buttonMobileView
               }
                 }}> <Typography sx={{fontWeight: 'bold'}}>Apply Loan</Typography> <MdArrowForwardIos/> </Button>
          </>
        </CustomPlate>


        <CustomPlate leftPic={loanPic5}
                rightPic={loanPic7} leftBg="#404040" rightBg="#F7F7F7">
          <>
            <p className='text-[22px] sm:text-[18px] text-[white] font-[500]'>Bridge Loan Finance</p>
              <p className='text-[16px] sm:text-[14px] text-[white] leading-[2rem]'>
              We provide short time financing options to our credit worthy users to satisfy their urgent cash liquidity needs.
              </p>
              <Button sx={{
                 textTransform: 'none',
                 width: '30%',
                 color: '#66A681',
                 gap: '1rem',
                 fontSize: '16px',
                 '@media (max-width: 639px)': {
                  ...buttonMobileView
               }
                 }}> <Typography sx={{fontWeight: 'bold'}}>Apply Loan</Typography> <MdArrowForwardIos/> </Button>
          </>
          <>
            <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Staff Loan</p>
              <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]' >
              At Zikora, we understand the realities. Quite often, users might need funds prior to payday so we have created a package to get our users to payday hassle free.
              </p>
              <Button sx={{
                 textTransform: 'none',
                 width: '30%',
                 color: '#66A681',
                 gap: '1rem',
                 fontSize: '16px',
                 '@media (max-width: 639px)': {
                  ...buttonMobileView
               }
                 }}> <Typography sx={{fontWeight: 'bold'}}>Apply Loan</Typography> <MdArrowForwardIos/> </Button>
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
              borderRadius: '0',
              padding: '3rem 1rem',
              backgroundSize: '5rem',
              gap: '0.5rem'

               
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
            gap: '2rem',
            backgroundImage: `url(${rightPic})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            backgroundPositionY: 'bottom',
            borderTopRightRadius: '0.7rem',
            borderBottomRightRadius: '0.7rem',
            '@media (max-width: 639px)': {
              width: '100%',
              borderRadius: '0',
              padding: '3rem 1rem',
              backgroundSize: '5rem',
              gap: '0.5rem'

               
           }

          }}>
              {children[1]}
          </Box>
      </Box>
  )
}


export default ShowCase