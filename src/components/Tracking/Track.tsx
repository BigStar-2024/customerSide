// import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid, Divider, Card, CardMedia, CardContent } from '@mui/material';
// import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React from "react";
import foodImg from "../../Assets/food1.png"
import Footer from '../Other/Footer';
import { RootState } from '../../redux-functionality';
import { useSelector } from 'react-redux';

const steps = [
    ['Order Placed', 'On 19 Jan 2023 at 1:40pm'],
    ['In Progress', 'Your Order is under Process'],
    ['Order is ready', 'In Tracking'],
    ['Completed', 'Except Your Order in 20'],
];

const Track = () => {

    const orderItems = useSelector((state: RootState) => state.cartCounter.cartItems);
    const currentEmail = useSelector((state: RootState) => state.auth.currentUser);
    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Stack spacing={3}>
                        <Stack spacing={3} textAlign={"center"}>
                            <Typography variant="h4">
                                Tracker
                        </Typography>
                            <Typography variant="h6">
                                {"You have _ _ orders ahead of you"}
                            </Typography>

                        </Stack>
                        <div>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    style={{ margin: "auto" }}
                                >
                                    <Stepper activeStep={1} nonLinear orientation="vertical" alternativeLabel={false}>
                                        {steps.map((label) => (
                                            <Step key={label[0]}>
                                                <StepLabel>
                                                    <Typography variant='h6'>
                                                        {label[0]}
                                                    </Typography>
                                                    {label[1]}
                                                </StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Grid>
                                <Grid
                                    xs={12}
                                    md={6}
                                    lg={8}

                                >
                                    <Stack spacing={3}>

                                        <Stack>
                                            <Grid container>

                                                <Grid xs={6}>
                                                    <Typography variant='subtitle1'>{"Order ID"}</Typography>
                                                </Grid>
                                                <Grid xs={6}>
                                                    <Typography variant='subtitle1' fontWeight={"bold"}>
                                                        {"103954932-4"}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                        <Divider />
                                        <Stack>
                                            <Grid container>

                                                <Grid xs={6}>
                                                    <Typography variant='subtitle1'>{"Account Information"}</Typography>
                                                </Grid>
                                                <Grid xs={6}>
                                                    <Typography variant='subtitle1' fontWeight={"bold"}>
                                                        {currentEmail}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                        <Stack>
                                            <Typography variant='h6' fontWeight={"bold"}>{"Order Info"}</Typography>

                                        </Stack>
                                        <Stack>
                                            {orderItems.map((orderItem) => (

                                                <Grid container spacing={1}>
                                                    <Grid xs={2}>
                                                        <img
                                                            src={`${orderItem.foodImg}?w=161&fit=crop&auto=format`}
                                                            srcSet={`${orderItem.foodImg}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                                            alt={orderItem.foodImg}
                                                            loading="lazy"
                                                        />
                                                    </Grid>
                                                    <Grid xs={7}>
                                                        <Stack>
                                                            <Typography variant='subtitle1' fontWeight={"bold"}>{orderItem.foodName}</Typography>
                                                            <Typography variant='subtitle2'>{`${orderItem.price}`}</Typography>
                                                        </Stack>
                                                    </Grid>
                                                    <Grid xs={3}>
                                                        <Typography variant='subtitle2' fontWeight={"bold"}>{`x${orderItem.addedNumber}`}</Typography>
                                                        <Typography variant='subtitle1'>{`$${parseFloat(orderItem.price.replace("$", "")) * orderItem.addedNumber}`}</Typography>
                                                    </Grid>
                                                </Grid>
                                            ))}
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid xs={12} >
                                    <Footer />
                                </Grid>
                            </Grid>
                        </div>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}




export default Track;
