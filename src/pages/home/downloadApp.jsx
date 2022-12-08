import React from 'react'
import {Box, Typography} from '@mui/material';
// import Button from '../../components/button';
import Button from '@mui/material/Button';
import downloadAppPic1 from '../../images/download-app-image1.png'
import {FaGooglePlay,FaAppStoreIos} from 'react-icons/fa'





const DownloadApp = () => {
  return (
    <Box className='h-full pb-28 width-full pt-20 flex flex-col items-center' >

        {/* first row */}
        
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '85%',
            backgroundColor: '#E8ECE3',
            padding: '2rem 3rem',
            borderRadius: '1.5rem'
        }}>
            {/* left */}
            <Box sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '1.5rem',
              
                
                }}>
                <Typography sx={{
                fontSize: '35px',
                fontWeight: 'bold',
                width: '60% ',
                color: '#404040'
                }} >
                    Download our apps
                </Typography>

                <Typography  sx={{ fontSize: '18px', color:'#5E5E5E', lineHeight: '180%', width: '70%'}}>
                    We make your banking more easy in your hand with our supper apps! Try these now!
                </Typography>

                <Box sx={{
                    display: 'flex',
                    marginTop: '3rem'
                    }}>
                    
                    <CustomButton>
                        <>
                        <FaGooglePlay/> 
                            <Typography sx={{
                                paddingLeft: '15px'
                            }}>Play Store</Typography>
                        </>
                    </CustomButton>

                    <Box sx={{marginLeft: '1rem'}}>

                        <CustomButton color='white'>
                            <>
                            <Box sx={{color: 'blue'}}>
                                <FaAppStoreIos /> 

                            </Box>
                                <Typography sx={{
                                    paddingLeft: '15px',
                                    color: '#404040'
                                }}>App Store</Typography>
                            </>
                        </CustomButton>
                    </Box>


                </Box>
            </Box>
            {/* right */}
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Box sx={{width: '62%',}}>
                <img src={downloadAppPic1} alt="customer service" />
                </Box>
            </Box>
            
        </Box>

    </Box>
  )
}


function CustomButton({children,color}) {
  return (
    <Button variant='contained' sx={{
        padding: '1rem 0',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: '22px',
        width: '12rem',
        backgroundColor: color != undefined ? 'white':'#404040',
        "&:hover": {
            backgroundColor: '#8c8c8c',
            
        },
    }}>
        {children}
    </Button>
  )
}


export default DownloadApp