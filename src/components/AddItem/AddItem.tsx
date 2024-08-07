import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import { Grid, Stack, IconButton, Typography, Divider, Container, Radio } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RecmCarousel from './RecmCarousel';
import Chip from '@mui/material/Chip';
// import makeStyles from "@mui/material"
import { useLocation, useNavigate } from 'react-router-dom';
// import makeStyles from '@mui/styles/makeStyles';

import { RootState } from '../../redux-functionality';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../redux-functionality/slices/cartSlice';
import { InitialState } from '../../types/redux/Item';
import { Link } from 'react-router-dom';
import CartIcon from "../Landing/CartIcon"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useAppSelector } from '../../redux-functionality';

const AddItem = () => {

    const location = useLocation();
    const foodState: InitialState = location.state;
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [addNumber, setAddNumber] = useState(foodState.addedNumber ? foodState.addedNumber : 1);
    const [value, setValue] = useState('cheeseB');
    const [startViewTime, setStartViewTime] = useState(new Date());
    // const [endViewTime, setEndViewTime] = useState<Date>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };



    const minuPro = () => {
        if (addNumber == 0)
            return;
        setAddNumber(addNumber - 1);
    }

    const plusPro = () => {
        setAddNumber(addNumber + 1)
    }

    const addCart = (foodState: InitialState) => {

        // console.log("foodState", foodState);
        if (!!foodState.addedNumber) {

        }
        if (addNumber !== 0) {
            foodState.addedNumber = addNumber;
            dispatch(addToCart(foodState));
        }

        navigate("/home");
    }

    const itemsInCart = useAppSelector((state: RootState) => {
        if (state && state.cartCounter && !!state.cartCounter.cartItems) {
            return state.cartCounter.cartItems.length
        } else {
            return 0;
        }
    });


    useEffect(() => {
        // This function will be called when the component mounts
        // const mountedTime: Date = new Date();
        console.log('Component mounted');
        setStartViewTime(new Date());

        // This function will be called when the component unmounts
        return () => {
            // const unmountedTime: Date = new Date();

            // setEndViewTime(new Date());
            const endViewTime = new Date();
            console.log('Component unmounted', calculateTimeDifference(endViewTime));
        };
    }, []);

    const calculateTimeDifference = (endViewTime: Date) => {
        console.log(`start time: ${startViewTime} endTime: ${endViewTime}`);
        if (startViewTime && endViewTime) {
            const difference = endViewTime.getTime() - startViewTime.getTime();
            const seconds = Math.floor(difference / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);

            return `${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
        }
        return 'N/A';
    };



    return (
        <>
            <Container sx={{ marginTop: '100px' }}>
                <Grid container style={{ maxHeight: "", maxWidth: "1200px" }} spacing={5} >
                    <Grid item container xs={12} spacing={10} >
                        <Grid item xs={12} md={7}>
                            <Carousel />
                        </Grid>

                        <Grid item container xs={12} md={5} sx={{ alignContent: "center" }} >
                            <Grid item container xs={12}  >
                                <Grid item xs={6} >
                                    <Typography gutterBottom variant="h6" component="div" whiteSpace='pre-wrap'>
                                        {foodState.foodName}
                                    </Typography>
                                </Grid>
                                <Grid item container xs={6} justifyContent={"center"}  >
                                    <div style={{ width: '100px' }}>
                                        <Stack direction={'row'} display={"flex"} alignItems={"center"}>
                                            <div>

                                                <IconButton onClick={minuPro} disableRipple>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>

                                            <Typography style={{ minWidth: '30px' }} gutterBottom variant="h6" component="div" whiteSpace='pre-wrap' marginBottom={"0"} textAlign={"center"} >
                                                {addNumber}
                                            </Typography>
                                            <div>
                                                <IconButton onClick={plusPro} color="error" disableRipple>
                                                    <AddCircleIcon />
                                                </IconButton>
                                            </div>
                                        </Stack>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: "left", }}>
                                <Box>

                                    <Typography gutterBottom variant="subtitle1" component="div" whiteSpace='pre-wrap'>
                                        {foodState.categoryName}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="div" whiteSpace='pre-wrap'>
                                        Meat Lovers is a pizza culinary which contains sliced beef sausage
                                        toppings, minced beef, beef burger, chicken sausage, tomato, cheese,
                                        cucumber. With a warm pizza wil warm your days.
                            </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} >

                                <Divider />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} spacing={10} >
                        <Grid item container xs={12} md={4} sx={{ alignContent: "center" }} >
                            <Grid item container xs={12}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom variant="h6" component="div" whiteSpace='pre-wrap'>
                                        {"Topping(1)"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} textAlign={"end"} >
                                    <Chip label="required" color="error" sx={{ borderRadius: "8px" }} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="cheeseB" control={<Radio />} label="Cheese Burger" labelPlacement='start' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} />
                                    <FormControlLabel value="BurgerF" control={<Radio />} label="Burger & Fires" labelPlacement='start' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} />
                                    <FormControlLabel value="Pizza" control={<Radio />} label="Pizza" labelPlacement='start' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} />
                                    <FormControlLabel value="CheeseP" control={<Radio />} label="Cheese Pizza - $2.50" labelPlacement='start' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} md={8} >
                            <div style={{ position: "relative" }}>
                                <RecmCarousel />
                                <div style={{
                                    position: "absolute", right: 5, bottom: 0,
                                    backgroundColor: 'gray',
                                    borderRadius: '50%',
                                    padding: '5px',
                                }}>
                                    <CartIcon cartNumber={itemsInCart} />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} style={{ textAlign: 'center', alignItems: "center" }}>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="subtitle1" whiteSpace='pre-wrap'>
                                Price
                            </Typography>
                            <Typography gutterBottom variant="h5" whiteSpace='pre-wrap'>
                                {`${foodState.price}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" size="medium" onClick={() => addCart(foodState)} >
                                {"AddItem"}
                            </Button>
                        </Grid>
                        <Divider />
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default AddItem;
