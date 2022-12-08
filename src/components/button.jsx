import React from 'react'
import Button from '@mui/material/Button';
const button = ({title, style}) => {
  return (
    <Button sx={{...style}}>{title}</Button>
  )
}

export default button