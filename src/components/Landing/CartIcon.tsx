import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


interface CartType {
    cartNumber: number;
}

const CartNumber: React.FC<CartType> = (props) => {

    const cartNumber = props.cartNumber;

    return (
        <IconButton aria-label="cart" >
            <StyledBadge badgeContent={cartNumber} color="secondary">
                <ShoppingCartIcon style={{ width: "30px", height: "30px" }} />
            </StyledBadge>
        </IconButton>
    );
}

export default CartNumber;