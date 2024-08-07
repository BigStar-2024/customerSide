import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Link from "react-router-dom"

import food1 from "../../Assets/food1.png"
import food2 from "../../Assets/food2.png"
import food3 from "../../Assets/food3.png"
import food4 from "../../Assets/food4.png"
import food5 from "../../Assets/food5.png"
import { Fab, responsiveFontSizes } from '@mui/material';

// import food6 from "../../Assets/food"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            food4,
    },
    {
        label: 'Bird',
        imgPath:
            food5,
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            food3,
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            food2,
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

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1 }} position={"relative"}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: "auto",
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                                key={index}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <div style={{
                position: "absolute", right: 10, bottom: 10, opacity: 0.5
            }}>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <Fab variant="extended" size="small" onClick={() => handleStepChange(0)} >
                    </Fab>
                    <Fab variant="extended" size="small" onClick={() => handleStepChange(1)} >
                    </Fab>
                    <Fab variant="extended" size="small" onClick={() => handleStepChange(2)} >
                    </Fab>
                    <Fab variant="extended" size="small" onClick={() => handleStepChange(3)} >
                    </Fab>
                </Box>
            </div>
        </Box>
    );
}

export default SwipeableTextMobileStepper;





