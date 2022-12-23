import React from 'react'
import  zikoraImg from '../images/ZikoraLogoGreen 1.png'
import  Button from './button'
import Divider from './divider'
import {IoIosArrowDown} from 'react-icons/io'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Box, Menu, MenuItem} from '@mui/material';
import { Link } from "react-router-dom";


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
          padding: '1rem 1.2rem 0 1.2rem',
          width: '100vw',
          alignItems: 'flex-end',
          marginBottom: '1.2rem'

      },
    }}>
      <Link to='/'>
        <img className='sm:w-10' src={zikoraImg} alt="" />
      </Link>

        <Box sx={{ '@media (max-width: 639px)': {
              display: 'none'
    
    
          },}}className='flex space-x-10 ml-20 '>
            <div className='flex space-x-2 items-center'><Link onClick={handleClickChannel}>Channels</Link><Icon /></div>
            <Link to='/loans/'>Loans</Link>
            <div className='flex space-x-2 items-center'><Link onClick={handleClick}>Accounts</Link><Icon /></div>
            <Link to='/about/'>About</Link>
            <Link  to='/contact'>Contacts</Link>
            
            {openAccount && <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}><Link to='/account/'>Account</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/current-account/'>Current Account</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/saving-account/'>Saving Account</Link></MenuItem>
              
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
              <MenuItem onClick={handleCloseChannel}><Link to='/main-channels'>Banking Channel</Link></MenuItem>
              <MenuItem onClick={handleCloseChannel}><Link to='/mobile-banking'>Mobile Banking</Link></MenuItem>
              <MenuItem onClick={handleCloseChannel}><Link to='/agency-banking'>Agency Banking</Link></MenuItem>
              <MenuItem onClick={handleCloseChannel}><Link to='/ussd-banking'>USSD Banking</Link></MenuItem>
              
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
              display: 'none',
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
