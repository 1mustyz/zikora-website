import React from 'react'
import Button from '@mui/material/Button';
const button = ({title, style, outline, onClick}) => {
  const isOutline = (outline !==true || outline === undefined) ? false : true 
  return (
    <>
   { (isOutline === false) && <Button sx={{...style}} onClick={onClick} >{title}</Button> }
   { isOutline && <Button sx={{...style}} variant="outlined" onClick={onClick}>{title}</Button> }

    </>
  )
}

export default button