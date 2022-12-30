import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import vectorImg8 from '../../images/business-vector8.png'
import vectorImg2 from '../../images/business-vector2.png'
import vectorImg4 from '../../images/business-vector4.png'
import vectorImg5 from '../../images/business-vector5.png'
import vectorImg6 from '../../images/business-vector6.png'
import vectorImg7 from '../../images/business-vector7.png'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: vectorImg8
      
  },
  {
    label: 'Bird',
    imgPath: vectorImg7
      
  },
  {
    label: 'Bali, Indonesia',
    imgPath: vectorImg6
      
  },
  {
    label: 'Goč, Serbia',
    imgPath: vectorImg5
      
  },
  {
    label: 'Goč, Serbia',
    imgPath: vectorImg4
      
  },
  
  {
    label: 'Goč, Serbia',
    imgPath: vectorImg2
      
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
            //   <Box
            //     component="img"
            //     sx={{
            //       height: 255,
            //       display: 'block',
            //       maxWidth: 400,
            //       overflow: 'hidden',
            //       width: '100%',
            //     }}
            //     src={step.imgPath}
            //     alt={step.label}
            //   />
            <img className='w-[109.71px] h-[14.99px] m-[auto]' src={step.imgPath} alt="" />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box className='text-center w-[30%] m-[auto] mt-[1rem]'>

        <MobileStepper 
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            // nextButton={
            //   <Button
            //     size="small"
            //     onClick={handleNext}
            //     disabled={activeStep === maxSteps - 1}
            //   >
            //     Next
            //     {theme.direction === 'rtl' ? (
            //       <KeyboardArrowLeft />
            //     ) : (
            //       <KeyboardArrowRight />
            //     )}
            //   </Button>
            // }
            // backButton={
            //   <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            //     {theme.direction === 'rtl' ? (
            //       <KeyboardArrowRight />
            //     ) : (
            //       <KeyboardArrowLeft />
            //     )}
            //     Back
            //   </Button>
            // }
        />
      </Box>
    </Box>
  );
}

export default Carousel;