import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    AppBar, Toolbar, Box, Button, Link, Typography,
    InputAdornment, InputLabel, OutlinedInput, Stack, IconButton
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

import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';


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
    return <Slide direction="down" ref={ref} {...props} />;
});

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons: {
    [index: string]: {
        icon: React.ReactElement;
        label: string;
    };
} = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

const Navbar: React.FC<MenuTabProps> = (props) => {

    const numberCategoryClick = (category: string) => {
        props.CategoryClick(category);
    }

    const [waiterProps, setWaiterProps] = React.useState({
        customerOption: 'waiter',
        tableNumber: "",
        comment: ""
    });

    const [openWaiter, setOpenWaiter] = React.useState(false);

    const callWaiter = () => {
        setOpenWaiter(true);
    };

    const closeWaiter = () => {
        setOpenWaiter(false);
        // console.log("waiterProps", waiterProps);
        if (waiterProps.tableNumber) {
            setWaiterProps({ customerOption: 'waiter', tableNumber: "", comment: "" })
        }
    };

    const optionChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        setWaiterProps(prevWaiter => ({ ...prevWaiter, customerOption: nextView }));
    };

    const tableNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tableNumber = event.target.value;
        setWaiterProps(prevWaiter => ({ ...prevWaiter, tableNumber }));
    }

    const commentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const comment = event.target.value;
        setWaiterProps(prevWaiter => ({ ...prevWaiter, comment }));
    }

    const [openFeedback, setOpenFeedback] = React.useState(false);

    const viewFeedback = () => {
        setOpenFeedback(true)
    }
    const closeFeedback = () => {
        setOpenFeedback(false);
    }

    const [starValue, setStarValue] = React.useState<number | null>(2);
    const [starHover, setStarHover] = React.useState(-1);


    return (
        <AppBar
            position="fixed"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box >
                    <img src={MenuX} alt="Website Logo" style={{ width: "40px" }} />
                </Box>
                <Stack
                    direction="row"
                    justifyContent="right"
                    alignItems="right"
                    spacing={0}
                >
                    <nav>

                        <Button variant="outlined" onClick={callWaiter} sx={{ my: 1, mx: 1.5 }}>
                            <EmojiPeopleIcon />
                        </Button>

                        <Dialog
                            open={openWaiter}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={closeWaiter}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle sx={{ textAlign: "center" }}>{"Table"}</DialogTitle>
                            <DialogContent>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="left"
                                    spacing={2}
                                    sx={{ width: "300px" }}
                                >
                                    <TextField
                                        id="input-with-icon-textfield"
                                        label="TableNumber"
                                        value={waiterProps.tableNumber}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <TableRestaurantOutlinedIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard"
                                        onChange={tableNumberChange}
                                    />
                                    <ToggleButtonGroup
                                        orientation="vertical"
                                        value={waiterProps.customerOption}
                                        exclusive
                                        onChange={optionChange}
                                    >
                                        <ToggleButton value="waiter" aria-label="waiter" sx={{ border: 1 }}>
                                            I Need Waiter
                                    </ToggleButton>
                                        <ToggleButton value="sponse" aria-label="sponse" sx={{ border: 1 }}>
                                            I Need Sponse
                                    </ToggleButton>
                                        <ToggleButton value="glass" aria-label="glass" sx={{ border: 1 }}>
                                            I Need Glass
                                    </ToggleButton>
                                    </ToggleButtonGroup>


                                    <InputLabel htmlFor="comment">Comment</InputLabel >
                                    <TextField
                                        placeholder="Enter comment"
                                        multiline
                                        value={waiterProps.comment}
                                        rows={4}
                                        onChange={commentChange}
                                    />

                                </Stack>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                                    sx={{ width: "300px", marginTop: "10px" }}
                                >
                                    <Button onClick={closeWaiter} variant="contained" size="medium" disableRipple>
                                        Send request
                                </Button>

                                    <Link href="/login" variant="body2" style={{ color: "red" }}>
                                        Support & Help
                                                  </Link>

                                    <img src={brand2} alt="Website Logo" />
                                </Stack>
                            </DialogContent>
                        </Dialog>

                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Language
                        </Link>


                        <Button onClick={viewFeedback} variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                            <ChatOutlinedIcon />
                        </Button>
                        <Dialog
                            open={openFeedback}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={closeFeedback}
                            aria-describedby="alert-dialog-slide-description"

                        >
                            <DialogTitle sx={{ textAlign: "center" }}>{"Feedback"}</DialogTitle>
                            <DialogContent>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Typography variant="h6" gutterBottom >
                                        {"Please Give us 60 Seconds"}
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom>
                                        Service Efficiency
                                    </Typography>
                                    <StyledRating
                                        name="highlight-selected-only"
                                        defaultValue={3}
                                        IconContainerComponent={IconContainer}
                                        getLabelText={(value: number) => customIcons[value].label}
                                        highlightSelectedOnly
                                    />

                                    <Typography variant="subtitle2" gutterBottom>
                                        Overall Experience
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: 200,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating
                                            name="hover-feedback"
                                            value={starValue}
                                            precision={0.5}
                                            getLabelText={getLabelText}
                                            onChange={(event, newValue) => {
                                                setStarValue(newValue);
                                            }}
                                            onChangeActive={(event, newHover) => {
                                                setStarHover(newHover);
                                            }}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {starValue !== null && (
                                            <Box sx={{ ml: 2 }}>{labels[starHover !== -1 ? starHover : starValue]}</Box>
                                        )}
                                    </Box>
                                    <Stack spacing={1} sx={{ textAlign: "left" }}>
                                        <InputLabel htmlFor="email-login">Name</InputLabel>
                                        <OutlinedInput
                                            id="email-login"
                                            type="textfield"
                                            name="name"
                                            // onChange={feedEmailChanged}
                                            placeholder="Enter name"
                                            fullWidth
                                        />
                                        <InputLabel htmlFor="email-login">Email Address</InputLabel>
                                        <OutlinedInput
                                            id="email-login"
                                            type="email"
                                            name="email"
                                            // onChange={feedEmailChanged}
                                            placeholder="Enter email address"
                                            fullWidth
                                        />
                                        <InputLabel htmlFor="comment">Comment</InputLabel >
                                        <TextField
                                            placeholder="Enter comment"
                                            multiline
                                            rows={3}
                                            maxRows={3}
                                            sx={{ width: "300px" }}
                                        />
                                        <Button sx={{ width: "100px" }} disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                                            Submit
                                        </Button>

                                    </Stack>
                                </Stack>
                            </DialogContent>
                        </Dialog>

                    </nav>
                    <Box sx={{ my: 1, mx: 1.5 }}>
                        <img src={brand2} alt="Website Logo" />
                    </Box>
                </Stack>
            </Toolbar>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    <MenuCategory numberCategoryClick={numberCategoryClick} />
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;