import React, { useState, useEffect } from "react";
import {
    AppBar, Toolbar, Box, Button, Link, Typography,
    InputAdornment, InputLabel, OutlinedInput, Stack, IconButton, ButtonBase
} from '@mui/material';

// import { ReactComponent as HelloIcon } from "../Assets/hello-icon.svg";
import MenuX from "../../../Assets/MenuX.svg";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StarIcon from '@mui/icons-material/StarBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import brand2 from '../../../Assets/brand2.png'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import TextField from '@mui/material/TextField';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';

import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import LanSelector from "./LanSelector"
import WaiterComponent from "./Waiter";
import Feedback from "./Feedback"


// interface MenuTabProps {
//     CategoryClick: (category: string) => void;
// }


const Navbar: React.FC = () => {

    return (
        <>
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    // [theme.breakpoints.down('md')]: {
                    //     width: 'auto'
                    // }
                }}
            >
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>

                    <Box component="span" sx={{ display: { md: 'block' }, flexGrow: 1 }}>
                        <img src={MenuX} alt="Website Logo" style={{ width: "40px" }} />
                    </Box>
                </ButtonBase>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            <WaiterComponent />
            <LanSelector />
            <Feedback />
        </>
    );
};

export default Navbar;