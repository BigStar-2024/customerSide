import React, { useState, useEffect } from "react";
import {
    AppBar, Toolbar, Box, Button, Link, Typography,
    InputAdornment, InputLabel, OutlinedInput, Stack, IconButton, ButtonBase, Avatar, Icon
} from '@mui/material';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import brand2 from '../../../Assets/brand2.png'
import TextField from '@mui/material/TextField';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import waiterImg from "../../../Assets/icons/Waiter.png"
import { useTheme } from "@mui/material/styles";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const WaiterComponent = () => {

    const theme = useTheme();

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
    return (
        <>

            <Box
                sx={{
                    ml: 2,
                    mr: 2,
                    borderWidth: "1px",
                }}
            >
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden', height: "48px" }}>
                    <Avatar
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
                        onClick={callWaiter}

                    >
                        <img alt="waiter" src={waiterImg} style={{ width: '30px', height: '30px' }} />
                        {/* <IconMenu2 stroke={1.5} size="1.3rem" /> */}
                    </Avatar>
                </ButtonBase>

            </Box>

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
        </>
    )
}

export default WaiterComponent;