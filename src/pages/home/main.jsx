import React from 'react'
import Header from '../../components/header'
import Button from '../../components/button'
import mainPhoto from '../../images/My project 3jj(2).png'
import homeMainBg from '../../images/home-main-bg.png'
import homeMainFrame118 from '../../images/Frame 118.png'
import homeMainFrame266 from '../../images/Frame 266.png'
import homeMainVector336 from '../../images/Vector 336.png'
import homeMainVector from '../../images/Vector.png'
import {FaWallet} from 'react-icons/fa'







const HomeMain = () => {
  return (
    <div style={{
        height: '130vh',
        background: 'rgba(232, 236, 227, 0.33)',
        paddingTop: '2rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        fontFamily: 'Circular Std',
        backgroundImage: `url(${homeMainBg})`

    }}>
        <Header />

        <div className='flex flex-row mt-5 justify-between'>
            {/* left */}
            <div className='mt-20 w-1/2 flex flex-col h-full ' >
                <div className='text-7xl font-bold  h-5/6 flex flex-col justify-between opacity-75'>
                    <p>Stress free</p>
                    <p>Banking, at your</p>
                    <p>Fingertips</p>
                </div>
                <p className='mt-10 leading-1 text-xl opacity-75'>Zikora is a people-first bank, serving communities in Nigeria by providing access to reliable digital banking services.</p>
                <div className='mt-10'>
                    <Button title="Start Online Banking" style={{
                        padding: '1.2rem 2rem',
                        background: '#66A681',
                        color: 'white',
                        borderRadius: '0.5rem',
                        fontWeight: 'bold'
                    }} />

                </div>
            </div>

            {/* right  */}
            <div className='mt-20 rounded w-2/5 ' >
                <div style={{
                    // border: '1px solid black',
                    backgroundColor:    'rgba(232, 236, 227, 0.4)',
                    borderRadius: '50%',
                    width: '100%',
                    height: '120%',
                    boxShadow: '0 1px 5px rgb(0 0 0 / 0.1)'
               
                }}>
                    
                    
                    </div>    
                <img style={{
                    position: 'absolute',
                    top: '10rem',
                    left: '55.5rem',
                    borderRadius: '5%',

                }} className='mr-20 ' src={mainPhoto} alt="main photo" />
                <img style={{
                    position: 'absolute',
                    top: "28rem",
                    left: '72rem'
                   
                }} className='' src={homeMainFrame118} alt="main photo" />
                
                <img style={{
                    position: 'absolute',
                    top: "32rem",
                    left: '50rem'
                   
                }} className='' src={homeMainFrame266} alt="main photo" />

                <img style={{
                    position: 'absolute',
                    top: "25rem",
                    left: '49rem'
                   
                }} className='' src={homeMainVector336} alt="main photo" />

                <div style={{
                    position: 'absolute',
                    top: "18rem",
                    left: '76rem',
                    padding: '1rem',
                    background: 'white',
                    borderRadius: '1.3rem',
                    color: '#66A681',
                    fontSize: '12px'
                   
                }}>
                    <FaWallet />

                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeMain