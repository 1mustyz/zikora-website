import React, { useState } from 'react'
import {Box, Typography, Button} from '@mui/material';
import loanPic3 from '../../images/loan-page-image3.png'
import loanPic4 from '../../images/loan-page-image4.png'
import loanPic5 from '../../images/loan-page-image5.png'
import loanPic6 from '../../images/loan-page-image6.png'
import loanPic7 from '../../images/loan-page-image7.png'

import {MdArrowForwardIos} from 'react-icons/md'
import CustomModal from '../../components/Animation/CustomModal';
import { useFormik } from 'formik';
import { InputField, ButtonRaw } from '../../components/formsField';
import { sendEmail } from '../../NetworkServices/services';
import * as Yup from 'yup';
import {CircularProgress} from '@mui/material';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
  userName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const buttonMobileView = {
  fontSize: '14px',
  width: '50%',
  minHeight: 0, minWidth: 0, padding: 0,
  marginTop: '1rem'
}

const ShowCase = () => {

  const [openModal, setOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: ''
    },

    validationSchema: validationSchema,

    onSubmit: (values,actions)=>{

      setIsLoading(true)
      const data = {
        userEmail: values.email,
        zikoraEmail: 'customer.service@zikoramfb.com',
        subject: `Loan Support`,
        body: `Name: ${values.userName}, Email: ${values.email}`
      }
      sendEmail(data)
      .then(val => {
        setIsLoading(false)
        if(val.status === 200) {
          actions.resetForm()
          setOpenModal(false)
          toast.success(val.data?.message)
        }
        else toast.error(val.data?.message)
        
      })
    },

  })

  const handleOpenModal = () => {
    setOpenModal(true)
  } 
  const handleCloseModal = () => {
    formik.resetForm()
    setOpenModal(false)
  }
  return (
    <div>
      <CustomModal 
        modalClassName='max-h-[300px]'
        open={openModal} 
        handleClose={()=> !isLoading && handleCloseModal()}
      >
        {!isLoading ? 
          <div className='flex flex-col gap-5 mb-4'>

            <p className='text-center'>Submit Details</p>

              <div className='flex flex-col gap-3'>

                <div className='flex flex-col gap-1'>
                  <p className='text-[12px]'>Full Name</p>
                  <InputField 
                    className='border-1 rounded-sm py-2 text-[14px]'
                    name={'userName'} 
                    formik={formik} 
                    title={'Enter Full Name'}
                    showError
                  />
                </div>

                <div className='flex flex-col gap-1 text-[14px]'>
                  <p className='text-[12px]'>Email</p>
                  <InputField 
                    className='border-1 rounded-sm py-2'
                    name={'email'} 
                    formik={formik} 
                    title={'Enter Email'}
                    showError
                  />
                </div>

              </div>

              <div className='flex justify-between'>
                <ButtonRaw 
                  text='Cancel' 
                  variants='outlined'
                  onClick={()=> !isLoading && handleCloseModal()}
                />

                <ButtonRaw 
                  text='Send'
                  onClick={formik.handleSubmit}
                />
              </div>

          </div>
          :
          <div className='h-[300px] flex justify-center items-center'>
              <CircularProgress/>
          </div>
        }
      </CustomModal>
      <Box className='h-full width-full pt-20 sm:pt-[2rem] flex flex-col items-center'
      sx={{
        // backgroundColor: '#F7F7F7'
      }}
      >
          
          <CustomPlate leftPic={loanPic3}
                  rightPic={loanPic4} leftBg="#F7F7F7" rightBg="#E8ECE3">
            <>
              <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Retail Loans</p>
                <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]' >
                We provide quick loans to our trusted users to ease the pressures that may be facing from their urgent financial needs.
                </p>
                <Button 
                  onClick={handleOpenModal}
                sx={{
                  textTransform: 'none',
                  width: '30%',
                  color: '#66A681',
                  fontSize: '16px',
                  '@media (max-width: 639px)': {
                    ...buttonMobileView
                }
                  }}> <Typography sx={{fontWeight: 'bold'}}>Apply</Typography> <MdArrowForwardIos/> </Button>
            </>
            <>
              <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Asset Acquisition Financing</p>
                <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]'>
                Zikora will provide financial credit to worthy users and businesses looking to purchase tangible assets for personal and/or operational use.
                </p>
                <Button 
                  onClick={handleOpenModal}
                sx={{
                  textTransform: 'none',
                  width: '30%',
                  color: '#66A681',
                  fontSize: '16px',
                  '@media (max-width: 639px)': {
                    ...buttonMobileView
                }
                  }}> <Typography sx={{fontWeight: 'bold'}}>Apply</Typography> <MdArrowForwardIos/> </Button>
            </>
          </CustomPlate>

          <CustomPlate leftPic={loanPic5}
                  rightPic={loanPic7} leftBg="#404040" rightBg="#F7F7F7">
            <>
              <p className='text-[22px] sm:text-[18px] text-[white] font-[500]'>Bridge Loan Finance</p>
                <p className='text-[16px] sm:text-[14px] text-[white] leading-[2rem]'>
                We provide short term financing options to our credit worthy users to satisfy their urgent cash liquidity needs.
                </p>
                <Button 
                  onClick={handleOpenModal}
                sx={{
                  textTransform: 'none',
                  width: '30%',
                  color: '#66A681',
                  fontSize: '16px',
                  '@media (max-width: 639px)': {
                    ...buttonMobileView
                }
                  }}> <Typography sx={{fontWeight: 'bold'}}>Apply</Typography> <MdArrowForwardIos/> </Button>
            </>
            <>
              <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Salary Loan</p>
                <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]' >
                At Zikora, we understand the realities. Quite often, users might need funds prior to payday so we have created a package to get our users to payday hassle free.
                </p>
                <Button
                  onClick={handleOpenModal} 
                sx={{
                  textTransform: 'none',
                  width: '30%',
                  color: '#66A681',
                  fontSize: '16px',
                  '@media (max-width: 639px)': {
                    ...buttonMobileView
                }
                  }}> <Typography sx={{fontWeight: 'bold'}}>Apply</Typography> <MdArrowForwardIos/> </Button>
            </>
          </CustomPlate>
          
          <CustomPlate rightPic=''
          leftPic={loanPic6} leftBg="#E8ECE3" rightBg="">
              <>
              <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Corporate Cash Advance</p>
                <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]' >
                  We provide cash loans to help solve the urgent working capital needs of our user's businesses.
                </p>
                <Button 
                  onClick={handleOpenModal}
                sx={{
                  textTransform: 'none',
                  width: '30%',
                  color: '#66A681',
                  fontSize: '16px',
                  '@media (max-width: 639px)': {
                    ...buttonMobileView
                }
                  }}> <Typography sx={{fontWeight: 'bold'}}>Apply</Typography> <MdArrowForwardIos/> </Button>
            </>
            <>
              {/* <p className='text-[22px] sm:text-[18px] text-[#404040] font-[500]' >Zikora Overdraft</p>
                <p className='text-[16px] sm:text-[14px] text-[#5E5E5E] leading-[2rem]' >
                Short on cash? No problem. Zikora provides a short time credit line to users, allowing payback period of up to 30 days. No hassle
                </p>
                <Button sx={{
                  textTransform: 'none',
                  width: '30%',
                  color: '#66A681',
                  fontSize: '16px',
                  '@media (max-width: 639px)': {
                    ...buttonMobileView
                }
                  }}> <Typography sx={{fontWeight: 'bold'}}>Apply Loan</Typography> <MdArrowForwardIos/> </Button> */}
            </>
          
          </CustomPlate>
        
      </Box>
    </div>
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