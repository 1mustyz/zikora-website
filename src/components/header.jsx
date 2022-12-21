import React from 'react'
import  zikoraImg from '../images/ZikoraLogoGreen 1.png'
import  Button from './button'
import Divider from './divider'
import {IoIosArrowDown} from 'react-icons/io'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Box, Menu, MenuItem} from '@mui/material';
import { NavLink } from "react-router-dom";


const Header = () => {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openAccount, setOpenAccount] = React.useState(false)
  const [openChannels, setOpenChannels] = React.useState(false)

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenAccount(true)
  };
  const handleClickChannel = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenChannels(true)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenAccount(false)
  };
  const handleCloseChannel = () => {
    setAnchorEl(null);
    setOpenChannels(false)
  };

 
  
  return (
    <>
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontFamily: 'Circular Std',
        marginBottom: '2rem',
        '@media (max-width: 639px)': {
          padding: '2rem 2rem 0 2rem',
          width: '100vw',
          alignItems: 'flex-end'

      },
    }}>
      <NavLink to='/'>
        <img className='sm:w-10' src={zikoraImg} alt="" />
      </NavLink>

        <Box sx={{ '@media (max-width: 639px)': {
              display: 'none'
    
    
          },}}className='flex space-x-10 ml-20 '>
            <div className='flex space-x-2 items-center'><NavLink onClick={handleClickChannel}>Channels</NavLink><Icon /></div>
            <div className='flex space-x-2 items-center'><NavLink to='/loans/'>Loans</NavLink><Icon /></div>
            <div className='flex space-x-2 items-center'><NavLink onClick={handleClick}>Accounts</NavLink><Icon /></div>
            <NavLink to='/about/'>About</NavLink>
            <NavLink  to='/contact'>Contacts</NavLink>
            
            {openAccount && <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}><NavLink to='/sub-account/'>Savings Account</NavLink></MenuItem>
              
            </Menu> }

            {openChannels && <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseChannel}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleCloseChannel}><NavLink to='/main-channels'>Banking Channel</NavLink></MenuItem>
              <MenuItem onClick={handleCloseChannel}><NavLink to='/mobile-banking'>Mobile Banking</NavLink></MenuItem>
              <MenuItem onClick={handleCloseChannel}><NavLink to='/agency-banking'>Agency Banking</NavLink></MenuItem>
              <MenuItem onClick={handleCloseChannel}><NavLink to='/ussd-banking'>USSD Banking</NavLink></MenuItem>
              
            </Menu> }
            
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
        fontSize: '10px'
    }}><IoIosArrowDown /></div>
  )
}
