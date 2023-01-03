import React from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const button = ({title, style, outline, linkTo}) => {
  const isOutline = (outline !==true || outline === undefined) ? false : true 
  return (
    <>
   { (isOutline === false) && <Link to={linkTo}><Button sx={{...style}} onClick={scrollToTop} >{title}</Button></Link> }
   { isOutline && <Link to={linkTo}><Button sx={{...style}} variant="outlined" onClick={scrollToTop}>{title}</Button></Link> }

    </>
  )
}

export default button

const scrollToTop = () => {
  window.scrollTo(0, 0)
}