import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import img from '../images/Slider1.jpg'
import img2 from  '../images/Slider2.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Slider 1',
    imgPath:img
  },
  {
    label: 'Slider 2',
    imgPath:img2
      
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Box sx={{ maxWidth: 2200, flexGrow: 1  ,marginTop: 8}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style = {{ width: '100%'}}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 400,
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        sx = {{ position: 'relative', bottom: 10, backgroundColor: 'transparent', color: 'black' }}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx = {{ position: 'relative', bottom: 200, color: 'black' }}
          >
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} 
            sx = {{ position: 'relative', bottom: 200, fontSize: 40, color: 'black' }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            
          </Button>
        }
      />

        <Box 

            sx = {{ 

                width: '500px',
                height: '150px',
                backgroundColor: 'white',
                position: 'relative',
                bottom: 400,
                left: 150
            }}
        >

            <Typography sx = {{ paddingTop: '5px', paddingLeft :"10px", color: '#FFFFF', fontSize: 34, fontWeight: 700 ,fontFamily: 'Source Sans Pro, sans-serif'}}>
              Learning that gets you
            </Typography>

            <Typography sx = {{ paddingTop: '5px', paddingLeft :"10px", fontFamily: 'Cursive', color: '#FFFFF', fontSize: 18, fontWeight: 400 }}>

               Skills for your present (and your Future). Get started with us
            </Typography>

        
        </Box>

    </Box>
  );
}

export default SwipeableTextMobileStepper;
