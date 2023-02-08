import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {RxHamburgerMenu} from 'react-icons/rx'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {IoIosArrowDown} from 'react-icons/io'
import { Link } from "react-router-dom";
import  Button from './button'






export default function MobileNav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const nav = [
    {name: 'Home', link:'/', children: []},

    {
      name: 'Channels', 
      link:'', 
      children: 
      [
        {name: 'Banking Channel', link:'/main-channels'}, 
        {name: 'Mobile Banking', link:'/mobile-banking'},
        {name: 'Agency Banking', link:'/agency-banking'},
        {name: 'USSD Banking', link:'/ussd-banking'},


    ]},
    {name: 'Loans', link:'/loans/', children: []},
    {
      name: 'Accounts', 
      link:'', 
      children: [
        {name: 'Account', link:'/account'}, 
        {name: 'Current Account', link:'/current-account'},
        {name: 'Saving Account', link:'/saving-account'},
    ]},
    {name: 'About', link:'/about/', children: []},

    {name: 'Contact', link:'/contact/', children: []}
  ]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: '82vw', marginTop:'2rem'}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {nav.map((text, index) => (
          <>
          { text.children == 0 && <ListItem key={text.name} disablePadding>
              <Link className='w-[100%]' to={text.link}>
                  <ListItemButton>
                    <p>{text.name}</p>
                  </ListItemButton>
                </Link> 
          </ListItem> }
          {text.children != 0  && <Accordion sx={{boxShadow: 'none'}}>

            <AccordionSummary
              expandIcon={<IoIosArrowDown />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{text.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {text.children.map((child)=>(
                <ListItem key={child.name} disablePadding>
                    <Link  className='w-[100%]' to={child.link}>
                      <ListItemButton>
                        <p>{child.name}</p>
                      </ListItemButton>
                    </Link> 
                </ListItem> 
              ))}
            </AccordionDetails>
            <Divider />
          </Accordion> }


          </>
        ))}
      </List>
        {/* <Button title='Join Now' style={{
               display: 'none',
             
             '@media (max-width: 639px)': {
               display: 'block',
               padding: '10px 18px',
                borderRadius: '0.3rem',
                fontWeight: 'bold',
                backgroundColor: '#404040',
                color: 'white',
                textTransform: 'none',
                width: '90%',
                margin: 'auto',
                marginTop: '7rem'
           },
 
         }}/> */}
    </Box>
  );

  return (
    <Box sx={{
        display: 'none',
        '@media (max-width: 639px)': {
        display: 'block',
        fontFamily: 'Circular Std',
    },
    }}>
        <React.Fragment key='right'>
          <Box sx={{
            display: 'none',
            '@media (max-width: 639px)': {
            display: 'block',
            cursor: 'pointer'
        },
        }} onClick={toggleDrawer('right', true)} className='sm:text-3xl'><RxHamburgerMenu/></Box>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      {/* ))} */}
    </Box>
  );
}



