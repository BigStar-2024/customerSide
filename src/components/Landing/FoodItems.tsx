import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box, Card, CardContent, CardMedia } from "@mui/material"
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ImgButton from './ImgButton';
import { Link } from "react-router-dom";
import { InitialState } from '../../types/redux/CartCounter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux-functionality';
// import food1 from '../../Assets/food1.png'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});



interface FoodItemsProps {
    foodID: string;
    calories: string;
    categoryID: string;
    description: string;
    estimatedTime: string;
    images: string[];
    label: string;
    menuID: string;
    name: string;
    order: string;
    recommendedProducts: string[];
    restaurantID: string;
    prices: string;
    itemSize: string;
    videos: string[];
    views: string;
}

interface foodData {
    foodData: FoodItemsProps;
    categoryName: string;
}

const FoodItems: React.FC<foodData> = (props) => {

    const foodData: FoodItemsProps = props.foodData;
    const categoryName: string = props.categoryName;
    const dispatch = useDispatch();

    const itemNumber: number = useSelector((state: RootState) => {
        const selectedItem = state.cartCounter.cartItems.find((item) => item.foodID === foodData.foodID);
        return selectedItem ? selectedItem.addedNumber : 0;
    });

    let addedNumber: number = 0;


    if (!!itemNumber) {
        addedNumber = itemNumber;
    }

    const foodState: InitialState = { foodID: foodData.foodID, foodName: foodData.name, categoryName: categoryName, addedNumber: addedNumber, price: foodData.prices, foodImg: foodData.images[0] };


    return (

        <Link to={{ pathname: `/item/${foodData.foodID}` }} state={foodState} style={{ textDecoration: "none" }}>
            {/* <Card
                sx={{
                    minWidth: 275,
                    ':hover': {
                        boxShadow: 20,
                    },
                    p: 0
                }}
            >
                <Paper
                    sx={{
                        margin: 'auto',
                        minHeight: 132,
                        maxWidth: 800,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={1}>
                        <Grid item xs={9} sm container spacing={0} sx={{ m: 2 }}>
                            <Grid container item xs={12} spacing={2}>
                                <Grid item xs={7}>
                                    <Typography gutterBottom variant="subtitle1" component="div" whiteSpace='pre-wrap'>
                                        {foodData.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={5} >
                                    <Typography gutterBottom variant="subtitle1" component="div" textAlign={"end"}>
                                        {foodData.label}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" color="text.secondary">
                                    {foodData.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    {foodData.prices}
                                </Typography>
                            </Grid>
                        </Grid>
                        {
                            foodData.images[0] ? (
                                <>
                                    <Grid item xs={3}>
                                        <img src={foodData.images[0]} alt="Website Logo" style={{ minHeight: "132px", minWidth: "98px" }} />
                                    </Grid>
                                </>
                            ) : (<>

                            </>)
                        }

                    </Grid>
                </Paper>
            </Card> */}
            <Card sx={{
                display: 'flex', maxWidth: "600px", maxHeight: "151px",
                ':hover': {
                    boxShadow: 20,
                },
            }}>
                <Grid container>
                    <Grid item xs={8}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {foodData.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {foodData.description}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Typography variant="subtitle1" color="error" component="div">
                                    {foodData.prices}
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={4} >
                        {foodData.images[0] ? (
                            <Box
                                component="img"
                                sx={{ width: 151 }}
                                src={foodData.images[0]}
                                alt=""
                            />) : (null)}
                    </Grid>
                </Grid>

            </Card>
        </Link>
    );
}

export default FoodItems;