import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    AppBar, Toolbar, Box, Button, Link, Typography,
    InputAdornment, InputLabel, OutlinedInput, Stack, Divider, Grid
} from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useSelector } from "react-redux";
import { RootState } from "../../redux-functionality";
import food1 from "../../Assets/food1.png"
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { InitialState } from "../../types/redux/Item";
import { useNavigate } from 'react-router-dom';
import { current } from "@reduxjs/toolkit";
import AddCircleIcon from '@mui/icons-material/AddCircle';


interface MenuTabProps {
    CategoryClick: (category: string) => void;
}



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="left" ref={ref} {...props} />;
});


interface CartType {
    closeCart: () => void;
    show: boolean;
}



const CartComponent: React.FC<CartType> = (props) => {

    const navigate = useNavigate();
    const cartShow = props.show;
    const theme = useTheme();
    const [openCart, setOpenCart] = React.useState(cartShow);
    const closeDialog = () => {
        setOpenCart(false);
        props.closeCart();
    }
    const [starValue, setStarValue] = React.useState<number | null>(2);
    const [starHover, setStarHover] = React.useState(-1);

    const itemsInCart = useSelector((state: RootState) => state.cartCounter.cartItems);


    const [items, setItems] = useState<InitialState[]>(itemsInCart);

    // console.log("price", items[0].price);

    const price = items.reduce((sum, item) => sum + item.addedNumber * parseFloat(item.price.replace("$", "")), 0);



    const [totalPrice, setTotalPrice] = useState(price);


    useEffect(() => {

        setOpenCart(cartShow);

    }, [cartShow]);

    const minusPro = (updateID: string) => {
        setItems(prevItems => {
            const updatedItems = prevItems.map(item => {
                if (item.foodID === updateID) {
                    const updateNumber = item.addedNumber - 1;
                    if (updateNumber === 0) {
                        return item;
                    }
                    return { ...item, addedNumber: updateNumber };
                }
                return item;
            });
            return updatedItems;
        });
    }

    const plusPro = (updateID: string) => {
        setItems(prevItems => {
            const updatedItems = prevItems.map(item => {
                if (item.foodID === updateID) {
                    const updateNumber = item.addedNumber + 1;
                    return { ...item, addedNumber: updateNumber };
                }
                return item;
            });
            return updatedItems;
        });
    }

    useEffect(() => {
        setTotalPrice(price);
    })

    const currentEmail = useSelector((state: RootState) => state.auth.currentUser);
    const handlePayment = () => {
        navigate("/payment", { state: currentEmail });
    }

    return (
        <Dialog
            open={openCart}
            TransitionComponent={Transition}
            keepMounted
            onClose={closeDialog}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ textAlign: "center" }}>{"Cart"}</DialogTitle>
            <DialogContent>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: 400 }}
                >
                    {
                        items.map((item, index) =>
                            <Stack key={index}>
                                <Card sx={{
                                    display: 'flex', width: 400, minWidth: 275,
                                    ':hover': {
                                        boxShadow: 20,
                                    },
                                }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={item.foodImg}
                                        alt="Live from space album cover"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {item.foodName}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {item.categoryName}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                                            <Typography variant="h6" color="text.secondary" component="div">
                                                {item.price}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: "center", pl: 1, pb: 1 }}>

                                        <div style={{ width: '100px' }}>
                                            <Stack direction={'row'} display={"flex"} alignItems={"center"}>
                                                <IconButton onClick={() => minusPro(item.foodID)} sx={{ mr: "16px" }}>
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                                <Typography minWidth={"30px"} variant="h6" color="text.secondary" component="div">
                                                    {item.addedNumber}
                                                </Typography>
                                                <IconButton onClick={() => plusPro(item.foodID)} color="error" disableRipple>
                                                    <AddCircleIcon />
                                                </IconButton>
                                            </Stack>
                                        </div>
                                    </Box>
                                </Card>
                                <Divider />
                            </Stack>
                        )
                    }
                    <Grid container spacing={4}>
                        <Grid item container xs={5}>
                            <Grid item xs={12}>
                                <Typography variant="h6" color="text.secondary" component="div">
                                    {"Total"}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" color="text.secondary" component="div">
                                    {`$${totalPrice}`}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <Button
                                color="primary"
                                size="medium"
                                variant="contained"
                                onClick={handlePayment}
                            >
                                Go To payment
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </DialogContent>
        </Dialog>

    )
}

export default CartComponent;