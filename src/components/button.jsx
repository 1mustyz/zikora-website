import React from 'react'
import Button from '@mui/material/Button';
const button = ({title, style, outline}) => {
  const isOutline = (outline !==true || outline === undefined) ? false : true 
  return (
    <>
   { (isOutline === false) && <Button sx={{...style}} >{title}</Button> }
   { isOutline && <Button sx={{...style}} variant="outlined">{title}</Button> }

    </>
  )
}

export default button