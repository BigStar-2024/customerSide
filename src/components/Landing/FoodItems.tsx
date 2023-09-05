import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ImgButton from './ImgButton';
// import food1 from '../../Assets/food1.png'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});



interface FoodItemsProps {
    foodID: string;
    foodImg: string;
    foodName: string;
    foodDescription: string;
    foodPrice: string;
    foodStatus: string;
    recProducts: string[];
}

interface foodData {
    foodData: FoodItemsProps;
}

const FoodItems: React.FC<foodData> = (props) => {

    const foodData: FoodItemsProps = props.foodData;

    const imgButtonClick = (foodData: FoodItemsProps) => {
        console.log("foodData", foodData);
    }

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
                                {foodData.foodName}
                            </Typography>
                        </Grid>
                        <Grid item xs={5} >
                            <Typography gutterBottom variant="subtitle1" component="div" textAlign={"end"}>
                                {foodData.foodStatus}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            {foodData.foodDescription}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            {foodData.foodPrice}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    {/* <ButtonBase sx={{ width: 128, height: 128 }}> */}
                    <div onClick={() => imgButtonClick(foodData)}>

                        <ImgButton ImgUrl={foodData.foodImg} ImgTitle="Order" ImgWidth="100%" />
                    </div>
                    {/* <Img alt="complex" src={foodImg} sx={{ width: 100, height: 100 }} /> */}
                    {/* </ButtonBase> */}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default FoodItems;