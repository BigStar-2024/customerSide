import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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

    const foodState: InitialState = { foodID: foodData.foodID, foodName: foodData.name, categoryName: categoryName, addedNumber: addedNumber, price: foodData.prices };


    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 800,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={1}>
                <Grid item xs={9} sm container spacing={0}>
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
                <Grid item xs={3}>
                    {/* <ButtonBase sx={{ width: 128, height: 128 }}> */}

                    <Link to={{ pathname: `/item/${foodData.foodID}` }} state={foodState}>
                        <ImgButton ImgUrl={foodData.images[0]} ImgTitle="Order" ImgWidth="100%" />
                    </Link>

                    {/* <Img alt="complex" src={foodImg} sx={{ width: 100, height: 100 }} /> */}
                    {/* </ButtonBase> */}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default FoodItems;