import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    AppBar, Toolbar, Box, Button, Link, Typography,
    InputAdornment, InputLabel, OutlinedInput, Stack
} from '@mui/material';

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import { ReactComponent as HelloIcon } from "../Assets/hello-icon.svg";
import MenuX from "../../Assets/MenuX.svg";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import StarIcon from '@mui/icons-material/StarBorder';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import brand2 from '../../Assets/brand2.png'
import MenuCategory from './MenuCategory';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface MenuTabProps {
    CategoryClick: (category: string) => void;
}


const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
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

    const cartShow = props.show;


    const [openCart, setOpenCart] = React.useState(cartShow);



    const viewFeedback = () => {
        setOpenCart(true)
    }
    const closeDialog = () => {
        setOpenCart(false);
        props.closeCart();
    }


    const [starValue, setStarValue] = React.useState<number | null>(2);
    const [starHover, setStarHover] = React.useState(-1);

    useEffect(() => {
        setOpenCart(cartShow);

    }, [cartShow]);

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
                >
                    <ShoppingCartOutlinedIcon sx={{ marginTop: "50px", width: "200px", height: "200px", border: "1px solid paper", padding: "0 4px" }} />

                    <Typography variant="subtitle2" gutterBottom>
                        Once you add items to your cart,
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ marginTop: "0px" }} >
                        they will appear here.
                    </Typography>

                    <Button sx={{ width: "150px", fontSize: "10px", marginTop: "50px" }} disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                        start shopping
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>

    )
}

export default CartComponent;