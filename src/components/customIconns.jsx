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
          color: 'white'
      }}>{children}</Box>
    )
  }

export default CustomIconns