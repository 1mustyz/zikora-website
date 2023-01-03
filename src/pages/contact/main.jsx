import React from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import contactMainPic from '../../images/contact-main-image1.png'
import contactMobileMainPic from '../../small-images/contact-mobile-main-pic.png'
import contactMainPic2 from '../../images/contact-image2.png'

import {Box, Typography, TextField} from '@mui/material';
import { MdLocationPin } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { BsCardText } from "react-icons/bs";
import DownloadApp from "../home/downloadApp"
import Footer from "../../components/footer"




const ContactMain = () => {
  return (
    <Box sx={{
        minHeight: '130vh',
        background: 'rgba(232, 236, 227, 0.33)',
        paddingTop: '2rem',
      
        fontFamily: 'Circular Std',
        backgroundImage: `url(${contactMainPic})`,
        backgroundRepeat: 'no-repeat',
        '@media (max-width: 639px)': {
            padding: 0,
            backgroundImage: `url(${contactMobileMainPic})`,

        },

    }}>
      <Box sx={{
        paddingLeft: '5rem',
        paddingRight: '5rem',
        '@media (max-width: 639px)': {
          padding: 0,
      },
      }}>
        <Header />

      {/* Row */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4rem',
        '@media (max-width: 639px)': {
          flexDirection: 'column',
          marginTop: '0',
          // 
        }
      }}>
        {/* first column */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* row 1 */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '2rem',
              padding: '0 1rem',
              '@media (max-width: 639px)': {
                alignItems: 'center'
                // 
             }

            }}>
              <CustomIconns color='white'>
                 <Box sx={{
                  backgroundImage: `url(${contactMainPic2})`,
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%',
                  backgroundPosition: 'center',
                  '@media (max-width: 639px)': {
                    backgroundSize: '1.5rem'
                 }
                }}>

                </Box>
               </CustomIconns>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                marginLeft: '3rem',
                '@media (max-width: 639px)': {
                  width: '70%',
                  marginLeft: '1rem',
                   
               }

              }}>

                <p className='text-[38px] font-[700]  text-[#404040] sm:text-[24px]'>
                    Contact us
                </p>

                <p className='text-[16px] text-[#5E5E5E] sm:text-[14px] mt-[0.8rem]' >
                    Zikora is a people-first bank, serving communities in Nigeria
                </p>
              </Box>
            </Box>

            {/* second row */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '2.2rem',
              width: '65%', 
              gap: '2rem',
              borderRadius: '0.8rem',
              backgroundColor: '#404040',
              color: 'white',
              marginTop: '12rem',
              '@media (max-width: 639px)': {
                width: '100%',
                display: 'none'
             }

            }}>
              <Typography sx={{fontSize: '22px', fontWeight: 'bold'}}>Get in touch</Typography>
                <CustomTile>
                  <MdLocationPin />
                  <>
                    <p className='text-[16px] sm:text-[14px]'>Zikora House Abatete,</p>
                    <p className='text-[16px] sm:text-[14px]'>Anambra, Nigeria</p>
                  </>
                </CustomTile>

                <CustomTile>
                  <MdPhoneEnabled />
                  <>
                    <p className='text-[16px] sm:text-[14px]'>+2349120363787</p>
                    <p className='text-[16px] sm:text-[14px]'>+2349120363788</p>
                  </>
                </CustomTile>

                <CustomTile>
                  <FaEnvelope />
                  <>
                    <p className='text-[16px] sm:text-[14px]'>info@zikoramfb.com</p>
                  </>
                </CustomTile>
            </Box>
        </Box>

        {/* second column */}
        <Box sx={{
          width: '45%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          paddingTop: '4rem',
          backgroundColor: 'white',
          borderRadius: '1rem',
          marginTop: '2rem',
          border: '1px solid #CCCCCC',
          '@media (max-width: 639px)': {
            width: '100%',
            borderRadius: '0',
            border: 'none',
            marginTop: '6rem'
         }
        }}>
          <Typography sx={{
            fontSize: '22px ',
            fontWeight: '500',
            color: '#404040',
            '@media (max-width: 639px)': {
             display: 'none'
           }

          }}>
            How Can We Help?
          </Typography>
          <CustomTextField title="Full name here..."><RxAvatar /></CustomTextField>
          <CustomTextField title="Email address..."><FaEnvelope /></CustomTextField>
          <CustomTextField title="Write here..." multiline={true}><BsCardText /></CustomTextField>
          <Button title='Submit Message' style={{
            padding: '10px 150px',
            borderRadius: '0.2rem',
            fontWeight: 'bold',
            backgroundColor: '#66A681',
            color: 'white',
            textTransform: 'none',
            width: '100%',
            fontSize: '16px',
            '@media (max-width: 639px)': {
              width: '100%',
              borderRadius: '0.2rem',
              padding: '10px 93px',

            }
            
        }}/>
          {/* second row */}
          <Box sx={{
            
            display: 'none',
              '@media (max-width: 639px)': {
                display: 'flex',
                flexDirection: 'column',
                padding: '2.2rem',
                gap: '2rem',
                borderRadius: '0.3rem',
                backgroundColor: '#404040',
                color: 'white',
                marginTop: '3rem',
                width: '90%',
                marginBottom: '5rem'
             }

            }}>
              <Typography sx={{fontSize: '22px', fontWeight: 'bold'}}>Get in touch</Typography>
                <CustomTile>
                  <MdLocationPin />
                  <>
                    <p className='text-[16px] sm:text-[14px]'>Zikora House Abatete,</p>
                    <p className='text-[16px] sm:text-[14px]'>Anambra, Nigeria</p>
                  </>
                </CustomTile>

                <CustomTile>
                  <MdPhoneEnabled />
                  <>
                    <p className='text-[16px] sm:text-[14px]'>+2349120363787</p>
                    <p className='text-[16px] sm:text-[14px]'>+2349120363788</p>
                  </>
                </CustomTile>

                <CustomTile>
                  <FaEnvelope />
                  <>
                    <p className='text-[16px] sm:text-[14px]'>info@zikoramfb.com</p>
                  </>
                </CustomTile>
            </Box>
        </Box>
      
      </Box>

      </Box>

        <DownloadApp />
      <Footer />
    </Box>
  )
}

const CustomIconns = ({color, children}) => {
  return (
    <Box sx={{
        backgroundColor: color, 
        width: '120px', 
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6rem',
        color: 'white',
        '@media (max-width: 639px)': {
          width: '60px', 
          height: '60px',
          borderRadius: '3rem',

      }
    }}>{children}</Box>
  )
}

const CustomIcon = ({color, children}) => {
  return (
    <Box sx={{
        backgroundColor: color, 
        width: '2.5rem', 
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1.5rem',
        color: '#66A681'
    }}>{children}</Box>
  )
}
const CustomTile = ({color, children}) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
      alignItems: 'center'
    }}>
      <CustomIcon color='white'>{children[0]}</CustomIcon>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px'
      }}>
        {children[1]}

      </Box>
    </Box>
  )
}


const CustomTextField = ({title,children, multiline}) => {
  return (
    <Box sx={{
      border: '1px solid #66A681',
      width: '80%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '1rem 1rem',
      paddingBottom: '1rem',
      borderRadius: '0.5rem',
      '@media (max-width: 639px)': {
        width: '90%',
        borderRadius: '0.2rem',
     }
     

  }}>
      <Box className='text-[28px] sm:text[16px] text-[#CCCCCC]'>
        {children}
      </Box>
      <TextField id="standard-basic" multiline={multiline} rows={6} placeholder={title} variant="standard" sx={{
          width: '87%',
          color: 'black',
          borderColor: 'black',
          }} InputProps={{
              disableUnderline: true, // <== added this
          }}/>
  </Box>
  )
}


export default ContactMain