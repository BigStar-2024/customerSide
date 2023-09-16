import React, { useState, useEffect } from "react";
import {
    Button, Typography,
    Stack,
    IconButton,
    Box,
} from '@mui/material';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import emptyCart from "../../Assets/emptyCart.jpg"


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


const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 0,
        top: 0,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',

    },
}));


const ItemsCart: React.FC<CartType> = (props) => {

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
                    <Box component="img" sx={{
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 }
                    }} src={emptyCart} />
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

export default ItemsCart;