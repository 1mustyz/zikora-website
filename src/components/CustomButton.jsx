import Button from '@mui/material/Button'

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
           },
      }} onClick={()=>{window.location = linkTo}}>
          {children}
      </Button>
    )
  }

  export default CustomButton