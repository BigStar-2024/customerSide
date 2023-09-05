import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import food1 from "../../Assets/food1.png"
import food2 from "../../Assets/food2.png"
import food3 from "../../Assets/food3.png"
import food4 from "../../Assets/food4.png"
import food5 from "../../Assets/food5.png"
import food6 from "../../Assets/food6.png"

import { Grid, Stack, IconButton, Typography, Divider, Card, CardContent, CardMedia } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: ['Chicken Cheese Burger', 'Entree Ingredient Information', '$23.60'],
        imgPath: food1,
    },
    {
        label: ['Cheese Burger', 'Calories: 2', '$15.0'],
        imgPath: food2,
    },
    {
        label: ['Burger', 'Calories: 5', '$13.6'],
        imgPath: food3,
    },
];

function RecmCarousel() {
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
        <Box >
            <Grid item container xs={12}>
                <Box>
                    <Card sx={{ display: 'flex' }}>
                        <CardContent
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box>
                                <Typography textAlign={'left'} variant='h6' >
                                    Recommended Products
                                </Typography>
                            </Box>
                            <Box>
                                <Typography textAlign={'left'} sx={{ fontWeight: "bold" }}>
                                    {images[activeStep].label[0]}
                                </Typography>
                                <Typography textAlign={'left'}>
                                    {images[activeStep].label[1]}
                                </Typography>
                            </Box>
                            <Box
                                display={'flex'}
                                justifyContent={'space-between'}
                                bottom={'auto'}
                            >
                                <Typography >Price</Typography>
                                <Typography variant='h6' >{images[activeStep].label[2]}</Typography>
                            </Box>
                        </CardContent>
                        <Box>
                            <MobileStepper
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
                                            <KeyboardArrowLeft />
                                        ) : (
                                                <KeyboardArrowRight />
                                            )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                                <KeyboardArrowLeft />
                                            )}
                                    </Button>
                                }
                            />
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {images.map((step, index) => (
                                    <div key={step.label[0]}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                src={step.imgPath}
                                                alt={step.label[0]}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                        </Box>
                    </Card>
                </Box>

            </Grid>
        </Box>
    );
}

export default RecmCarousel;