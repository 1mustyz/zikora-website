import React from 'react'
import Header from '../../components/header'
import demoBg from '../../images/demo-bg.png'
import betaDemo from '../../images/beta-demo.png'
import CustomIconns from '../../components/customIconns'
import Button from '../../components/button'
import {Box, Typography, TextField} from '@mui/material';
import { FaEnvelope } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { BsCardText } from "react-icons/bs";

const Main = () => {
  return (
    <Box sx={{
        minHeight: '100vh',
        background: 'rgba(232, 236, 227, 0.33)',
        paddingTop: '2rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        fontFamily: 'Circular Std',
        backgroundImage: `url(${demoBg})`,
        backgroundRepeat: 'no-repeat',
        '@media (max-width: 639px)': {
            padding: 0,
            backgroundImage: 'none',
        }
    }}>
        <Header />
        <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '6rem'

            }}>
              <CustomIconns color='white'> <img src={betaDemo} alt="" /> </CustomIconns>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                marginLeft: '3rem'

              }}>

                <Typography  sx={{
                    fontSize: '38px ',
                    fontWeight: 'bold',
                    color: '#404040'

                }}>
                    Join Beta
                </Typography>

                <Typography sx={{color: '#5E5E5E', fontSize: '16px', marginTop: '0.8rem'}}>
                    Join our private beta group by requesting now
                </Typography>
              </Box>

              <Box className='flex flex-col w-[30%] ml-[4rem] gap-[1rem] h-[60vh]'>
                <CustomTextField title="First name"><RxAvatar /></CustomTextField>
                <CustomTextField title="Last name "><RxAvatar /></CustomTextField>
                <CustomTextField title="Phone"><FaEnvelope /></CustomTextField>
                <CustomTextField title="Email address..."><FaEnvelope /></CustomTextField>
                <Button title='Submit Request' style={{
                    padding: '10px 18px',
                    borderRadius: '0.1rem',
                    fontWeight: 'bold',
                    backgroundColor: '#66A681',
                    color: 'white',
                    textTransform: 'none',
                    width: '100%',
                    fontSize: '16px'
                    
                }}/>
              </Box>
            </Box>

    </Box>
  )
}

const CustomTextField = ({title,children, multiline}) => {
    return (
      <Box sx={{
        border: '1px solid #66A681',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1rem 1rem',
        paddingBottom: '1rem',
        borderRadius: '0.1rem',
        backgroundColor: 'white'
        
       
  
    }}>
        <Box sx={{fontSize: '28px', color: '#CCCCCC',}}>
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
export default Main