import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {Box, Typography} from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Carousel({images1}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images1.length;

  const btnStyle = 'border-1 rounded-[2rem] m-0 p-[0.8rem]'

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className='w-[80vw] m-[auto]'>

      <Box className='mt-[5rem] w-[100%]' >
       
          <div>{images1[activeStep]}</div>
        {/* <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images1.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <step/>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews> */}
        <Box className='text-center w-[30%] m-[auto] mt-[9rem]'>

        </Box>
      </Box>
          <MobileStepper className='w-[30vw] m-[auto]'
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                
                <Button 
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    {theme.direction === 'rtl' ? (
                    <div className={btnStyle}>
                      <KeyboardArrowLeft />
                    </div>
                    ) : (
                    <div className={btnStyle}>

                      <KeyboardArrowRight />
                    </div>

                    )}
                  </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <div className={btnStyle}>

                    <KeyboardArrowRight />
                  </div>
                  ) : (
                    <div className={btnStyle}>
                      <KeyboardArrowLeft />
                    </div>
                  )}
                </Button>
              }
          />
    </div>
  );
}

export default Carousel;