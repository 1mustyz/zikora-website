import React from 'react'
import  zikoraImg from '../images/ZikoraLogoGreen 1.png'
import  Button from './button'
import Divider from './divider'
import {IoIosArrowDown} from 'react-icons/io'
import {RxHamburgerMenu} from 'react-icons/rx'
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <>
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '18px',
        fontFamily: 'Circular Std',
        marginBottom: '2rem',
        '@media (max-width: 639px)': {
          padding: '2rem 2rem 0 2rem',
          width: '100vw',
          alignItems: 'flex-end'

      },
    }}>
        <img className='sm:w-10' src={zikoraImg} alt="" />

        <Box sx={{ '@media (max-width: 639px)': {
              display: 'none'
    
    
          },}}className='flex space-x-10 ml-20 '>
            <div className='flex space-x-2 items-center'><p>Channels</p><Icon /></div>
            <div className='flex space-x-2 items-center'><p>Loans</p><Icon /></div>
            <div className='flex space-x-2 items-center'><p>Accounts</p><Icon /></div>
            <p>About</p>
            <p>Contacts</p>
            
        </Box>
        <Button title='Join Now' style={{
            padding: '10px 18px',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: 'black',
            textTransform: 'none',
            '@media (max-width: 639px)': {
              display: 'none'
    
    
          },

        }}/>
      <Box sx={{
        display: 'none',
        '@media (max-width: 639px)': {
          display: 'block'
      },
      }} className='sm:text-3xl'><RxHamburgerMenu/></Box>
    </Box>
    <Divider/>
    </>
  )
}

export default Header



const Icon = () => {
  return (
    <div style={{
        fontSize: '12px'
    }}><IoIosArrowDown /></div>
  )
}
