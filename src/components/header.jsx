import React from 'react'
import  zikoraImg from '../images/ZikoraLogoGreen 1.png'
import  Button from './button'
import Divider from './divider'
import {IoIosArrowDown} from 'react-icons/io'
const Header = () => {
  return (
    <>
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '18px',
        fontFamily: 'Circular Std',
        marginBottom: '2rem'
    }}>
        <img src={zikoraImg} alt="" />
        <div className='flex space-x-10 ml-20'>
            <div className='flex space-x-2 items-center'><p>Channels</p><Icon /></div>
            <div className='flex space-x-2 items-center'><p>Loans</p><Icon /></div>
            <div className='flex space-x-2 items-center'><p>Accounts</p><Icon /></div>
            <p>About</p>
            <p>Contacts</p>
            
        </div>
        <Button title='Join Now' style={{
            padding: '10px 18px',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            backgroundColor: 'white'

        }}/>
    </div>
    <Divider/>
    </>
  )
}

export default Header



const Icon = () => {
  return (
    <div style={{
        fontSize: '12px'
    }}><IoIosArrowDown /></div>
  )
}
