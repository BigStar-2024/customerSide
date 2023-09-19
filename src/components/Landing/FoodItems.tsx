import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box, Card, CardContent, CardMedia, Container } from "@mui/material"
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ImgButton from './ImgButton';
import { Link } from "react-router-dom";
import { InitialState } from '../../types/redux/CartCounter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../../redux-functionality';
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

    const itemNumber: number = useAppSelector((state: RootState) => {
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
            {/*https://gour.media/social/#gin  <Card
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
            {/* <Card sx={{
                display: 'flex', maxWidth: "600px", height: "135px",
                ':hover': {
                    boxShadow: 20,
                },

            }}>
                <Container>
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

                </Container>
                <Container>
                    {foodData.images[0] ? (
                        <Box
                            component="img"
                            sx={{ width: 135 }}
                            src={foodData.images[0]}
                            alt=""
                        />) : (null)}

                </Container>
            </Card> */}
            <Card
                sx={{
                    display: 'flex',
                    border: 'solid',
                    borderWidth: '2px',
                    marginTop: '20px',
                    justifyContent: 'space-between',
                    //   borderColor: ${props.style.borderColor},
                    //   backgroundColor: ${props.style.backgroundColor}
                }}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        // color: ${props.style.itemColor},
                        // fontFamily: ${props.style.secondaryFont}
                    }}
                >
                    <Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            bottom={'auto'}
                        >
                            <Typography
                            // variant='body4'
                            //   fontSize={Number(props.style.secondaryFontSize)}
                            //   fontWeight={props.style.fontWeight ? 'bold' : ''}
                            >
                                {foodData.name}
                            </Typography>
                            <Typography
                                //   fontSize={Number(props.style.secondaryFontSize)}
                                // variant='body4'
                                fontWeight={'bold'}
                            //   color={props.style.priceColor}
                            >
                                {foodData.label}
                            </Typography>
                        </Box>
                        <Typography
                            textAlign={'left'}
                        //   fontSize={Number(props.style.secondaryFontSize)}
                        //   fontFamily={props.style.secondaryFont}
                        //   fontWeight={props.style.fontWeight ? 'bold' : ''}
                        >
                            Entree Ingredient Information
                        </Typography>
                    </Box>

                    <Box display={'flex'} justifyContent={'space-between'}>

                        <Typography
                            // fontSize={Number(props.style.secondaryFontSize)}
                            textAlign={'left'}
                            sx={{
                                fontWeight: 'bold',
                                //   fontFamily: ${props.style.secondaryFont},
                                //   color: ${props.style.categoryColor}
                            }}
                        >
                            {foodData.prices}
                        </Typography>
                        {/* <Typography
                                                textAlign={'left'}
                                                height={'80%'}
                                                fontSize={Number(props.style.secondaryFontSize)}
                                                sx={{
                                                  paddingLeft: '5px',
                                                  paddingRight: '5px',
                                                  borderRadius: '5px',
                                                  backgroundColor: '#4A4B50',
                                                  fontWeight: 'bold',
                                                  color: 'white',
                                                  fontFamily: ${props.style.secondaryFont}
                                                }}
                                              >
                                                Popular
                                              </Typography> */}
                    </Box>
                </CardContent>
                {foodData.images[0] ? (

                    <CardMedia
                        component='img'
                        sx={{ width: '120px', weight: '120px' }}
                        image={foodData.images[0]}
                        alt='MenuX'
                    />
                ) : (null)}
            </Card>
        </Link>
    );
}

export default FoodItems;