import React from 'react'
import {Box, Typography} from '@mui/material';
// import Button from '../../components/button';
import Button from '@mui/material/Button';
import downloadAppPic1 from '../../images/download-app-image1.png'
import {FaGooglePlay,FaAppStoreIos} from 'react-icons/fa'
import AppStoreImage from '../../images/apple-store.png'
import GooglePlay from '../../images/google-play.png'

const DownloadApp = () => {
  return (
    <Box className='h-full pb-28 sm:pb-[3rem] width-full pt-20 sm:pt-[1rem] flex flex-col items-center' >

        {/* first row */}
        
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '85%',
            backgroundColor: '#E8ECE3',
            padding: '2rem 3rem',
            borderRadius: '1.5rem',
            marginLeft: '1.5rem',
            '@media (max-width: 639px)': {
              margin: '0',
              width: '100%',
              flexDirection: 'column-reverse',
              padding: 0,
              paddingBottom: '2rem',
              borderRadius: '0',
              borderTopLeftRadius: '1.2rem',
              borderTopRightRadius: '1.2rem'


          },
        }}>
            {/* left */}
            <Box sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '1.5rem',
                '@media (max-width: 639px)': {
                    width: '90%',
                    
                },
                
                }}>
                <p className='text-[33px] text-[#404040] sm:mt-[2rem] font-[700] sm:text-[24px] w-[60%] sm:w-[80%]'>
                    Download our App
                </p>

                <p className='text-[16px] sm:text-[14px] text-[#404040] leading-[180%] w-[100%] sm:w-[90%]' >
                    We've made powerful banking easy and placed it in the palm of your hand. Download our App now!
                </p>

                <Box sx={{
                    display: 'flex',
                    marginTop: '3rem',
                    '@media (max-width: 639px)': {
                       flexDirection: 'column',
                        gap: '1rem',
                    },
                    }}>
                    <CustomButton 
                        backgroundImageUrl={AppStoreImage} 
                        linkTo='https://apps.apple.com/us/app/zikora/id6444196255' 
                    />
                    
                    <Box className='ml-[1rem] sm:ml-[0]' >

                        <CustomButton 
                            backgroundImageUrl={GooglePlay} 
                            linkTo='https://play.google.com/store/apps/details?id=com.clive.zikora' 
                        />
                        {/* <CustomButton linkTo='https://play.google.com/store/apps/details?id=com.clive.zikora'>
                            <>
                            <FaGooglePlay/> 
                                <Typography sx={{
                                    paddingLeft: '15px'
                                }}>Play Store</Typography>
                            </>
                        </CustomButton> */}
                    </Box>



                </Box>
            </Box>
            {/* right */}
            <Box sx={{
                display: 'flex', 
                justifyContent: 'flex-end',
                '@media (max-width: 639px)': {
                    justifyContent: 'center',
                },
                }}>
                <Box className='w-[62%] sm:w-[80%]'>
                <img src={downloadAppPic1} alt="customer service" />
                </Box>
            </Box>
            
        </Box>

    </Box>
  )
}


                    
                    
function CustomButton({children,color,linkTo,backgroundImageUrl}) {
    return (
      <Button variant='contained' sx={{
          padding: '1rem 0',
          color: 'white',
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '20px',
          width: '12rem',
          height: '3rem',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover', // You can customize the background properties here
          backgroundPosition: 'center center',
          backgroundColor: color !== undefined ? 'white':'#404040',
          "&:hover": {
              backgroundColor: '#8c8c8c',
              
          },
          '@media (max-width: 639px)': {
             width: '85%',
             height: '4rem'
           },
      }} onClick={()=>{window.location = linkTo}}>
          {children}
      </Button>
    )
  }


export default DownloadApp