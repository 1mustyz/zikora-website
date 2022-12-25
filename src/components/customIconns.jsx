import React from 'react'
import {Box} from '@mui/material';

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

export default CustomIconns