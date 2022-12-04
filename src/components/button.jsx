import React from 'react'

const button = ({title, style}) => {
  return (
    <button style={{...style}}>{title}</button>
  )
}

export default button