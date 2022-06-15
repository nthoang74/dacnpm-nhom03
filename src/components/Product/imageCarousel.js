import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
//import { Icon } from '@iconify/react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
//import arrowLeftFill from '@iconify/icons-eva/arrow-left-fill';
//import arrowRightFill from '@iconify/icons-eva/arrow-right-fill';
import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from "react-swipeable-views-utils";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function ImagesCarousel({ images }) {
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
    <Box sx={{ flexGrow: 1 }}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((image, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component='img'
                sx={{
                  height: 'auto',
                  width: 'auto',
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '442px',
                  overflow: 'hidden',
                }}
                src={image}
                alt='illustration images for product'
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='medium'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              //   <Icon icon={arrowLeftFill} />
              <ChevronLeftIcon />
            ) : (
              //   <Icon icon={arrowRightFill} />
              <ChevronRightIcon />
            )}
          </Button>
        }
        backButton={
          <Button onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              //   <Icon icon={arrowRightFill} />
              <ChevronRightIcon />
            ) : (
              //   <Icon icon={arrowLeftFill} />
              <ChevronLeftIcon />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
