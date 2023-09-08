import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import Add from '@mui/icons-material/Add'
import { Grid, Stack, IconButton, Typography, Divider, Container } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RecmCarousel from './RecmCarousel';
import Chip from '@mui/material/Chip';
import makeStyles from "@mui/material"
import { foodData } from '../../helpers/foodData';
import { useLocation } from 'react-router-dom';
// import makeStyles from '@mui/styles/makeStyles';

import { RootState } from '../../redux-functionality';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../redux-functionality/slices/cartSlice';
import { InitialState } from '../../types/redux/CartCounter';
import { Link } from 'react-router-dom';
import CartIcon from "../Landing/CartIcon"


const AddItem = () => {

    const location = useLocation();

    const foodState: InitialState = location.state;

    // useEffect(() => {
    //     console.log("foodStateReceive", foodState);
    // })

    const dispatch = useDispatch();


    const [addNumber, setAddNumber] = useState(foodState.addedNumber);

    const [value, setValue] = useState('cheeseB');

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
        // dispatch(addItem(value));
    }


    const itemsInCart = useSelector((state: RootState) => {
        if (state && state.cartCounter && !!state.cartCounter.cartItems) {
            return state.cartCounter.cartItems.length
        } else {
            return 0;
        }
    });


    return (
        <>
            <Container sx={{ marginTop: '100px' }}>
                <Grid container xs={12} style={{ maxHeight: "", maxWidth: "1200px" }} spacing={5} >
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
                                <Grid item container xs={6} justifyContent={"center"} >
                                    <Stack direction={'row'}>
                                        <IconButton onClick={minuPro}>
                                            <RemoveCircleOutlineIcon />
                                        </IconButton>
                                        <Typography gutterBottom variant="h6" component="div" whiteSpace='pre-wrap' marginBottom={"0px"}>
                                            {addNumber}
                                        </Typography>
                                        <IconButton onClick={plusPro}>
                                            <ControlPointIcon />
                                        </IconButton>
                                    </Stack>
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
                                    <Chip label="required" color="error" />
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
                                    position: "absolute", right: -20, bottom: 0,
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
                            <Link to="/home">
                                <Button variant="contained" size="medium" onClick={() => addCart(foodState)} >
                                    {"AddItem"}
                                </Button>
                            </Link>
                        </Grid>
                        <Divider />
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default AddItem;


// import * as React from 'react'
// import Card from '@mui/material/Card'
// import CardMedia from '@mui/material/CardMedia'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
// import Typography from '@mui/material/Typography'
// import BatteryCharging80OutlinedIcon from '@mui/icons-material/BatteryCharging80Outlined'
// import landingImage from '../../Assets/food1.png'
// import foodImage from '../../Assets/food2.png'
// import { Box, Container, IconButton, ThemeProvider } from '@mui/material'
// import { useTheme } from '@mui/material/styles'
// import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
// import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
// import Carousel from "./Carousel"

// export default function MobileCP() {
//     const theme = useTheme()

//     return (
//         <ThemeProvider theme={theme}>
//             <Container>
//                 <Carousel />
//             </Container>
//             <Card sx={{ marginBottom: '30px' }}>
//                 <CardContent sx={{ height: '45px' }}>
//                     <Box display={'flex'} justifyContent={'space-between'}>
//                         <Typography sx={{ fontSize: '15px' }}>06:22</Typography>
//                         <BatteryCharging80OutlinedIcon sx={{ height: '20px' }} />
//                     </Box>
//                 </CardContent>
//                 {/* <CardMedia
//                     component='img'
//                     height='300'
//                     image={landingImage}
//                     alt='MenuX'
//                 /> */}

//                 <CardContent>
//                     <Box
//                         display={'flex'}
//                         justifyContent={'space-between'}
//                         marginBottom={'30px'}
//                         marginTop={'20px'}
//                     >
//                         <Typography variant='h4'>Meat Lovers</Typography>
//                         <Typography variant='h4'>$29.50</Typography>
//                     </Box>
//                     <Box textAlign={'left'}>
//                         <Typography variant='h6'>Description</Typography>
//                     </Box>
//                     <Box marginBottom={'30px'}>
//                         <Typography
//                             variant='body2'
//                             textAlign={'left'}
//                             color='text.secondary'
//                         >
//                             Meat Lovers is a pizza culinary which contains sliced beef sausage
//                             toppings, minced beef, beef burger, chicken sausage, tomato,
//                             cheese, cucumber. With a warm pizza will warm your days.
//             </Typography>
//                     </Box>
//                     <Box
//                         textAlign={'left'}
//                         display={'flex'}
//                         justifyContent={'space-between'}
//                         marginBottom={'20px'}
//                     >
//                         <Typography variant='h6'>Recommended Products</Typography>
//                         <Box>
//                             <IconButton>
//                                 <KeyboardArrowLeftRoundedIcon />
//                             </IconButton>
//                             <IconButton>
//                                 <KeyboardArrowRightRoundedIcon />
//                             </IconButton>
//                         </Box>
//                     </Box>
//                     <Box>
//                         <Card sx={{ display: 'flex' }}>
//                             <CardContent
//                                 sx={{
//                                     width: '100%',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between'
//                                 }}
//                             >
//                                 <Box>
//                                     <Typography textAlign={'left'} sx={{ fontWeight: 'bold' }}>
//                                         Fries with Leaves Dish
//                   </Typography>
//                                     <Typography textAlign={'left'}>
//                                         Entree Ingredient Information
//                   </Typography>
//                                 </Box>
//                                 <Box
//                                     display={'flex'}
//                                     justifyContent={'space-between'}
//                                     bottom={'auto'}
//                                 >
//                                     <Typography >Price</Typography>
//                                     <Typography >$6.57</Typography>
//                                 </Box>
//                             </CardContent>
//                             <CardMedia
//                                 component='img'
//                                 sx={{ width: '150px', height: '150px' }}
//                                 image={foodImage}
//                                 alt='MenuX'
//                             />
//                         </Card>
//                     </Box>
//                 </CardContent>
//                 <CardActions disableSpacing></CardActions>
//             </Card>
//         </ThemeProvider>
//     )
// }