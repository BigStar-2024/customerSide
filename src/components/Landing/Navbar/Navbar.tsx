import React, { useState, useEffect } from "react";
import {
    AppBar, Toolbar, Box, Button, Link, Typography,
    InputAdornment, InputLabel, OutlinedInput, Stack, IconButton, ButtonBase
} from '@mui/material';

// import { ReactComponent as HelloIcon } from "../Assets/hello-icon.svg";
import MenuX from "../../../Assets/MenuX.svg";
import LanSelector from "./LanSelector"
import WaiterComponent from "./Waiter";
import Feedback from "./Feedback";
import brand2 from '../../../Assets/brand2.png';


// interface MenuTabProps {
//     CategoryClick: (category: string) => void;
// }


const Navbar: React.FC = () => {

    return (
        <>
            <Box
                sx={{
                    width: 100,
                    display: 'flex',
                    // [theme.breakpoints.down('md')]: {
                    //     width: 'auto'
                    // }
                }}
            >
                <ButtonBase sx={{ overflow: 'hidden' }}>
                    <Box component="span" sx={{ display: { md: 'block' }, flexGrow: 1 }}>
                        <img src={MenuX} alt="Website Logo" style={{ width: "50px" }} />
                    </Box>
                </ButtonBase>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            <WaiterComponent />
            <LanSelector />
            <Feedback />

            <Box component="span" sx={{ display: 'flex' }}>
                <img src={brand2} alt="Website Logo" style={{ height: "60px" }} />
            </Box>
        </>
    );
};

export default Navbar;