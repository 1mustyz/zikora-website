import React from 'react'
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





const Footer = () => {
  return (
    <Box sx={{
        backgroundImage: `url(${footerBottomImage1})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'right', 
        backgroundPositionY: 'bottom', 
    }}>
        {/* column */}
        <Box sx={{
            width: '90%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography sx={{color: '#5E5E5E'}}>
            To get the updates
            </Typography>
            <Typography  sx={{
                fontSize: '1.58rem',
                fontWeight: 'bold',
                color: '#404040'

            }}>
                Subscribe our Newsletter
            </Typography>

            <Box sx={{
                border: '1px solid #dbdbd6',
                width: '60%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '1rem 1rem',
                borderRadius: '0.5rem',
                boxShadow: '3px 20px 30px #dbdbd6',
                marginTop: '4rem'

            }}>

                <TextField id="standard-basic" label="Type Your Email Address" variant="standard" sx={{
                    width: '70%',
                    color: 'black',
                    borderColor: 'black'
                    }} InputProps={{
                        disableUnderline: true, // <== added this
                    }}/>
                <Button title='Subscribe' style={{
                    padding: '1rem 2rem',
                    // borderRadius: '0.2rem',
                    fontWeight: 'bold',
                    backgroundColor: '#66A681',
                    color: 'white',
                    textTransform: 'none',
                    boxShahadow: `5px 10px #888888`,
                    fontSize: '16px'
                   
                }}/>
            </Box>
                {/* row */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '7rem'

            }}>
                {/* column 1 */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Box sx={{marginBottom: '2rem'}}><NavLink to='/'><img src={zikoraImg} alt="" /></NavLink></Box>
                    <Box>
                        <CustomP> <NavLink to='/'>Zikora House</NavLink></CustomP>
                        <CustomP>Abatete Anambra</CustomP>
                        <CustomP>info@zikoramfb.com</CustomP>

                    </Box>
                    <Box sx={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: '1rem', 
                        fontSize: '18px',
                        marginTop: '2rem'
                        
                        }}>
                        <CustomIcon color='#3B5998'> <FiFacebook/> </CustomIcon>
                        <CustomIcon color='#D0358E'> <BsInstagram/> </CustomIcon>
                        <CustomIcon color='#0077B5'> <RiLinkedinFill/> </CustomIcon>
                        <CustomIcon color='#55ACEE'> <FiTwitter/> </CustomIcon>
                                                
                    </Box>
                </Box>

                 {/* column 2 */}
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


                 {/* column 3 */}
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
            <Typography sx={{
                width: '25%', 
                margin: 'auto', 
                marginTop:'2rem', 
                color:'#BDBDBD',
                fontSize: '16px'
                }}> &copy; 2023 Zikora. All rights reserved</Typography>

        </Box>
    </Box>
  )
}


const CustomText = ({children}) => {
  return (
    <Typography  sx={{
        fontSize: '1.4rem',
        fontWeight: 'bold',
        color: '#404040',
        marginBottom: '2rem'

    }}>
        {children}
    </Typography>
  )
}


const CustomP = ({children}) => {
  return (
    <Typography onClick={scrollToTop} sx={{marginBottom: '1.5rem', color: '#5E5E5E', fontSize: '16px'}}>{children}</Typography>

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
        color: 'white'
    }}>{children}</Box>
  )
}

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

export default Footer