import React from 'react'
import {Box} from '@mui/material';
import mobileBankingPic1 from '../../images/bussnes-s1.png'
import mobileBankingPic2 from '../../images/bussnes-s2.png'
import mobileBankingPic3 from '../../images/bussnes-s3.png'


const StartWith = () => {
  return (
    <Box className='h-full width-full pt-[7rem] sm:pt-[3rem] mb-[6rem]'>

        <Box className='ml-[7rem] sm:ml-0 sm:flex sm:flex-col sm:items-center' >


          <p className='text-[34px] sm:text-[24px] sm:w-[90%] sm:text-center text-[#404040] font-[700]' >
            Start with basics that just work
          </p>
          <p className='text-[16px] sm:text-[14px] sm:w-[90%] sm:text-center sm:mt-[1rem] sm:leading-[180%] text-[#5E5E5E]'>
            Lorem ipsum dummy text are used in this section so place your text.
          </p>
            
           
        </Box>
        <Box className='flex flex-col items-center w-[90%] m-[auto] sm:items-start sm:mr-[2rem] sm:ml-[1.2rem]' >

            {/* board of directors */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '8rem',
                alignItems: 'center',
                marginTop: '4rem',
                '@media (max-width: 639px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  marginTop: '2rem',
              }
            }}>
                <PreImageAndText pic={mobileBankingPic1} title="Open FDIC-insured checking and savings accounts."/>
                <VerticalDivider />

                <PreImageAndText pic={mobileBankingPic2} title="Easily issue employee debit and credit cards with custom limits."/>
                <VerticalDivider />

                <PreImageAndText pic={mobileBankingPic3} title="Pay vendors and employees through ACH, wires, checks, and foreign exchange." />


            </Box>

            {/* Team members */}
            {/* <Box className='flex flex-row w-[80vw] h-[70vh] mt-[4rem] '>
            
            <Box className='w-[40%] h-[100%] flex flex-col justify-center pl-[2rem] bg-[#F7F7F7] rounded-tl-[1rem] rounded-bl-[1rem]'>
                <p className='text-[#5E5E5E] text-[16px]'>How to</p>
                <p className='text-[#404040] text-[28px]'>Purchase Airtime</p>
            </Box>

            <Box className=' w-[30%] h-[100%] flex flex-col gap-[2rem] pt-[2rem] pl-[2rem] bg-[#E8ECE3]'
                sx={{
                backgroundImage: `url(${ussdBankingPic2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'right',
                backgroundPositionY: 'bottom'
                }}
            >
                <p className='text-[18px] text-[#404040]'>For you</p>
                <Box className='flex flex-col gap-[1rem]'>
                <TextAndArrow text="Dial *614*677* Amount# (e.g: *614*100#)" arrowColor="#CCCCCC" textColor="#404040"/>
                <TextAndArrow text="Wait for the success message" arrowColor="#CCCCCC" textColor="#404040"/>
                <TextAndArrow text="Start making call" arrowColor="#CCCCCC" textColor="#404040"/>

                </Box>
                
            </Box>

            <Box className='w-[30%] h-[100%] pt-[2rem] pl-[2rem] flex flex-col gap-[2rem] bg-[#404040] rounded-tr-[1rem] rounded-br-[1rem] '
                sx={{
                backgroundImage: `url(${ussdBankingPic1})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'right',
                backgroundPositionY: 'bottom'
                }}
            >
                <p className='text-[#FFFFFF]'>To Others Number</p>
                <Box className='flex flex-col gap-[1rem]'>
                <TextAndArrow text="Dial *614*677* Amount* Phone Number #" arrowColor="#5E5E5E" textColor="#FFFFFF"/>
                <TextAndArrow text="Wait for the success message" arrowColor="#5E5E5E" textColor="#FFFFFF"/>
                <TextAndArrow text="Enjoy" arrowColor="#5E5E5E" textColor="#FFFFFF"/>

                </Box>
                
            </Box>

            </Box> */}
            {/* <Divider className="w-[90vw]"/> */}

        </Box>
    </Box>
  )
}


const PreImageAndText = ({pic, title, post}) => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        '@media (max-width: 639px)': {
          flexDirection: 'row',
          gap: '2rem'
        }
    }}>
      <Box className='sm:w-[40%]'>

        <CustomIconns color='white'>
          {/* <img src={pic} alt="" /> */}
          <Box sx={{
            backgroundImage: `url(${pic})`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            '@media (max-width: 639px)': {
              backgroundSize: '2.5rem',
            
            }
            
          }}>

          </Box>
        </CustomIconns>
      </Box>

      <Box className='text-center sm:text-left'>
        <p className='text-[22px] text-[#404040] font-[500] sm:text-[18px] mt-[3rem] sm:mt-[0]'>
          {title}
        </p>

        {/* <p className='text-[22px] text-[#404040] font-[500] sm:text-[18px]'>
          {post}
        </p> */}

      </Box>

    </Box>
  )
}
 
 const VerticalDivider = () => {
   return (
     <Box sx={{
      borderLeft: '1px solid #CCCCCC',
      height: '10rem',
      '@media (max-width: 639px)': {
        display: 'none'        
    }
     }}>

     </Box>
   )
 }
 
 const CustomIconns = ({color, children}) => {
  return (
    <Box sx={{
        backgroundColor: '#F7F7F7', 
        width: '180px', 
        height: '180px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6rem',
        color: 'white',
        '@media (max-width: 639px)': {
          width: '100px', 
          height: '100px',
          borderRadius: '3rem',
        }  
    }}>{children}</Box>
  )
}



export default StartWith