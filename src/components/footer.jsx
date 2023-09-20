import React, {useState} from 'react'
import {Box, Typography, TextField} from '@mui/material';
import Button from './button';
import  zikoraImg from '../images/ZikoraLogoGreen 1.png'
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import Divider from './divider'
import footerBottomImage1 from '../images/footer-bottom-image1.png'
import footerBottomImage1Mobile from '../small-images/footer-image-mobile.png'
import { useFormik } from 'formik';
import { InputField } from './formsField';
import { sendEmail } from '../NetworkServices/services';
import {CircularProgress} from '@mui/material';
import { toast } from 'react-toastify';


const Footer = () => {
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: (values) => {
            const data = {
                userEmail: values.email,
                zikoraEmail: 'customer.service@zikoramfb.com',
                subject: `Subscribe to zikora newsletter`,
                body: `I will like to subscribe to zikora newsletter, Email: ${values.email}`
            }
            setIsLoading(true)
            sendEmail(data)
            .then(val => {
                setIsLoading(false)
                if(val.status === 200) {
                toast.success(val.data?.message)
                }
                else toast.error(val.data?.message)
                
            })
        },
        validate: (values) => {
          const errors = {};
          if (!values.email){
            errors.email = 'Email is required';
          }
          return errors;
        }
      });
  return (
    <Box sx={{
        backgroundImage: `url(${footerBottomImage1})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'right', 
        backgroundPositionY: 'bottom', 
        '@media (max-width: 639px)': {
            backgroundImage: `url(${footerBottomImage1Mobile})`,

        },
    }}>
        {/* column */}
        <Box sx={{
            width: '90%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '@media (max-width: 639px)': {
                alignItems: 'flex-start',
                marginTop: '0'
            },
        }}>
            <p className='text-[#5E5E5E] sm:text-[14px]' >
            To get the updates
            </p>
            <p className='font-[700] text-[#404040] text-[28px] sm:text-[24px]'>
                Subscribe our Newsletter
            </p>

            <Box sx={{
                border: '1px solid #dbdbd6',
                width: '60%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '10px',
                alignItems: 'center',
                padding: '1rem 1rem',
                borderRadius: '0.5rem',
                boxShadow: '3px 20px 30px #dbdbd6',
                marginTop: '4rem',
                '@media (max-width: 639px)': {
                    width: '100%',
                    flexDirection: 'column',
                    border: 'none',
                    boxShadow: 'none',
                    padding: 0,
                    marginTop: '2rem',
                },

            }}>
                <div className='sm:border-1 sm:border-[#dbdbd6] w-full sm:rounded-md sm:py-3'>
                    <InputField 
                        name={'email'} 
                        title={'Type Your Email Address'} 
                        formik={formik} 
                        className='bg-transparent bg-opacity-50'
                    />    

                </div>

                <button
                    disabled ={isLoading} 
                    className={`rounded-sm text-[white] text-[18px] font-semibold w-[35%] sm:w-[90%] py-4 ${isLoading ? 'bg-slate-300' : 'bg-[#66A681]'} `} onClick={formik.handleSubmit}>
                    {!isLoading ? "Subscribe"
                    :
                    <CircularProgress size={20}/>}
                </button>
               
              
            </Box>
                {/* row */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '7rem',
                '@media (max-width: 639px)': {
                    flexWrap: 'wrap',
                    marginTop: '4rem',

                },

            }}>
                {/* column 1 */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '@media (max-width: 639px)': {
                        marginBottom: '2rem',
    
                    },
                }}>
                    <Box sx={{marginBottom: '2rem'}}><NavLink to='/'><img src={zikoraImg} alt="" /></NavLink></Box>
                    <Box >
                        <CustomP> <NavLink to='/'>Zikora House</NavLink></CustomP>
                        <CustomP>Abatete Anambra</CustomP>
                        <CustomP click={false}> <a href="mailto:info@zikoramfb.com">info@zikoramfb.com</a> </CustomP>
                        <CustomP click={false}> <a href="mailto:customer.service@zikoramfb.com">customer.service@zikoramfb.com</a> </CustomP>

                    </Box>
                    <Box sx={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '1rem', 
                        fontSize: '18px',
                        marginTop: '2rem',
                        '@media (max-width: 639px)': {
                            display: 'none'
                        },
                        
                        }}>
                        <CustomIcon color='#3B5998'> <a target='blanck' href="https://www.facebook.com/zikorabanks"><FiFacebook/></a> </CustomIcon>
                        <CustomIcon color='#D0358E'> <a target='blanck' href="https://www.instagram.com/zikorabank"><BsInstagram/></a></CustomIcon>
                        <CustomIcon color='#0077B5'> <a target='blanck' href="https://www.linkedin.com/company/zikorabank"><RiLinkedinFill/></a>  </CustomIcon>
                        <CustomIcon color='#55ACEE'> <a target='blanck' href="https://twitter.com/zikorabank"><FiTwitter/></a> </CustomIcon>
                                                
                    </Box>
                </Box>

                 {/* column 2 */}
                 <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <CustomText>Channels</CustomText>
                    <Box>
                        <CustomP><NavLink to='/mobile-banking'>Mobile Banking</NavLink></CustomP>
                        <CustomP><NavLink to='/agency-banking'>Agency Banking</NavLink></CustomP>
                        <CustomP><NavLink to='/ussd-banking'>USSD Banking</NavLink></CustomP>
                        <CustomP><NavLink to=''>Internet Banking</NavLink></CustomP>
                        <CustomP><NavLink to=''>ATM Cards</NavLink></CustomP>

                    </Box>
                   
                </Box>


                 {/* column 3 */}
                 <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                   <CustomText><NavLink to='/account/'> Accounts </NavLink></CustomText>
                    <Box>
                        <CustomP><NavLink to='/current-account/'>Current Account</NavLink></CustomP>
                        <CustomP><NavLink to='/saving-account/'>Savings Account</NavLink></CustomP>
                        <CustomP><NavLink to='#'>Fixed Deposit Account</NavLink></CustomP>

                    </Box>
                </Box>


                 {/* column 4 */}
                 <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <CustomText>Quick links</CustomText>
                    <Box>
                        <CustomP><NavLink to='/business-banking'>Business Banking</NavLink></CustomP>
                        <CustomP><NavLink to='/privacy-policy'>Privacy Policy</NavLink></CustomP>
                        <CustomP><NavLink to='/terms-service'>Terms & Conditions</NavLink></CustomP>
                        <CustomP><NavLink to='/beta-request'>Beta Request</NavLink></CustomP>

                    </Box>
                </Box>


            </Box>
        </Box>

        {/* bottom divider */}
        <Box sx={{width: '90%', margin: 'auto', marginTop:'2rem',}}>
            <Divider/>
            <Box sx={{
                        display: 'none', 
                        '@media (max-width: 639px)': {
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'row', 
                            gap: '1rem', 
                            fontSize: '16px',
                            margin: 'auto',
                            marginTop: '2rem',
                        },
                        
                        }}>
                        <CustomIcon color='#3B5998'> <a target='blanck' href="https://www.facebook.com/zikorabanks"><FiFacebook/></a> </CustomIcon>
                        <CustomIcon color='#D0358E'> <a target='blanck' href="https://www.instagram.com/zikorabank"><BsInstagram/></a></CustomIcon>
                        <CustomIcon color='#0077B5'> <a target='blanck' href="https://www.linkedin.com/company/zikorabank"><RiLinkedinFill/></a>  </CustomIcon>
                        <CustomIcon color='#55ACEE'> <a target='blanck' href="https://twitter.com/zikorabank"><FiTwitter/></a> </CustomIcon>
                                                
                                                
                    </Box>
            <Typography sx={{
                width: '25%', 
                margin: 'auto', 
                marginTop:'2rem', 
                color:'#BDBDBD',
                fontSize: '16px',
                '@media (max-width: 639px)': {
                    width: '80%',
                   
                },
                }}> &copy; 2023 Zikora. All rights reserved</Typography>

        </Box>
    </Box>
  )
}


const CustomText = ({children}) => {
  return (
    <Typography  sx={{
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#404040',
        marginBottom: '2rem',
        '@media (max-width: 639px)': {
            fontSize: '18px',
            
        },

    }}>
        {children}
    </Typography>
  )
}


const CustomP = ({children, click=true}) => {
  return (
    <p className='mb-[1.5rem] text-[#5E5E5E] text-[16px] sm:text-[14px]' onClick={click ? scrollToTop : ''} >{children}</p>

  )
}


const CustomIcon = ({color, children}) => {
  return (
    <Box sx={{
        backgroundColor: color, 
        width: '2rem', 
        height: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1rem',
        color: 'white',
        '@media (max-width: 639px)': {
            width: '1.8rem', 
            height: '1.8rem',
        },
    }}>{children}</Box>
  )
}

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

export default Footer