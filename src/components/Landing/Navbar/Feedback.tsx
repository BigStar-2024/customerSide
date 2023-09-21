import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import { TransitionProps } from '@mui/material/transitions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import {
    AppBar, Toolbar, Box, Button, Link, Typography,
    InputAdornment, InputLabel, OutlinedInput, Stack, IconButton, Slide, ButtonBase, Avatar
} from '@mui/material';

import StarIcon from '@mui/icons-material/StarBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import TextField from '@mui/material/TextField';



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


const Feedback = () => {

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
        <>

            <Box
                sx={{
                    ml: 2,
                    mr: 5,

                }}
            >
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden', height: "48px" }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            backgroundColor: "#efefef",
                            border: "2px solid #858585",
                            borderRadius: "10px",
                            // ...theme.typography.commonAvatar,
                            // ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            // background: theme.palette.secondary.light,
                            // color: theme.palette.secondary.dark,
                            '&:hover': {
                                // background: theme.palette.secondary.dark,
                                // color: theme.palette.secondary.light
                            }
                        }}
                        onClick={viewFeedback}
                        color="inherit"
                    >
                        <ChatOutlinedIcon sx={{ color: 'black' }} />

                        {/* <IconMenu2 stroke={1.5} size="1.3rem" /> */}
                    </Avatar>
                </ButtonBase>

            </Box>

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
        </>
    )
}

export default Feedback;