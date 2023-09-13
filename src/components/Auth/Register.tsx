import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Stack } from "@mui/material"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuX from '../../Assets/MenuX.svg';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import facebookBtn from '../../Assets/facebook_btn.png';
import instagramBtn from '../../Assets/instagram_btn.png';
import googleBtn from '../../Assets/google_btn.png';
import appleBtn from '../../Assets/apple_btn.png';
import { RootState, useAppDispatch } from '../../redux-functionality';
import UserInfo from "../../types/redux/Auth"
import { addToUser, userSignUp } from '../../redux-functionality/slices/authSlice';
import { useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const defaultTheme = createTheme();

export default function SignUp() {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState({ userName: "", userEmail: "", userPassword: "", userGender: "" });
    const [userBirth, setUserBirth] = React.useState<Dayjs | null>(null);
    const [userSignUpStatus, setUserSignUpStatus] = React.useState("idle");
    const registerError = useSelector((state: RootState) => state.auth.error);

    useEffect(() => {
        if (registerError) {
            console.log("register error", registerError);
            toast.error(registerError, { position: toast.POSITION.TOP_CENTER });
        }
        // switch (registerError) {
        //     case "Firebase: Error (auth/email-already-in-use).":
        //         toast.error("error", {
        //             position: toast.POSITION.TOP_RIGHT
        //         });
        //         return;
        // }
    }, [registerError]);

    const dispatch = useAppDispatch();

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) ~ :not(style)': {
            marginTop: theme.spacing(2),
        },
    }));

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    }



    const onChangeGender = (event: SelectChangeEvent) => {
        // setGender(event.target.value as string);
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value as string })
        // console.log(gender);
    };

    const canSignUp = [userInfo.userEmail, userInfo.userGender, userInfo.userName, userInfo.userPassword, userBirth].every(Boolean) && userSignUpStatus === "idle"

    const handleSignUp = async () => {

        if (canSignUp) {
            try {
                setUserSignUpStatus("pending");
                const newUser = { ...userInfo, userBirth: userBirth ? userBirth.toISOString() : "" }

                await dispatch(userSignUp(newUser)).unwrap();

                toast.success("sign up is success!", {
                    position: toast.POSITION.TOP_RIGHT
                })
            } catch (error) {
                console.error("Failed to sign up the user", error)
            } finally {
                setUserSignUpStatus("idle")
            }
        } else {
            console.log("enter all information")
        }
    }


    return (
        <ThemeProvider theme={defaultTheme}>

            <ToastContainer />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box >
                        <img src={MenuX} alt="Website Logo" style={{ width: "50px" }} />
                    </Box>
                    <Typography component="h1" variant="h5">
                        Hello!
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Register to get started
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                                <TextField
                                    name="userName"
                                    autoComplete="given-name"
                                    label="*UserName"
                                    value={userInfo.userName} variant="outlined"
                                    fullWidth
                                    onChange={onChange} />
                                {/* <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="UserName"
                                    autoComplete = "given-name"
                                    value={userInfo.userName}
                                    onChange={onChange}
                                /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="userEmail"
                                    autoComplete="email"
                                    value={userInfo.userEmail}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="userPassword"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={userInfo.userPassword}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="userGender"
                                        value={userInfo.userGender}
                                        label="Gender"
                                        onChange={onChangeGender}
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Date of Birth" sx={{ width: "100%" }} value={userBirth} onChange={setUserBirth} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSignUp}
                            disabled={!canSignUp}
                        >
                            Register
                        </Button>

                        <Root>
                            <Divider>Or Register with</Divider>
                        </Root>
                        <Grid container spacing={2} sx={{ mt: 2 }} textAlign={"center"}>
                            <Grid item xs={3}>
                                <Button variant="outlined" href="https://www.google.com/" size="small">
                                    <img
                                        src={googleBtn}
                                        style={{ width: "30px", height: "30px" }}
                                        alt="title"
                                        loading="lazy"
                                    />
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" href="https://www.instagram.com/" size="small">
                                    <img
                                        src={instagramBtn}
                                        style={{ width: "30px", height: "30px" }}
                                        alt="title"
                                        loading="lazy"
                                    />
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" href="https://www.facebook.com/" size="small">
                                    <img
                                        src={facebookBtn}
                                        style={{ width: "30px", height: "30px" }}
                                        alt="title"
                                        loading="lazy"
                                    />
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button variant="outlined" href="https://www.apple.com/" size="small">
                                    <img
                                        src={appleBtn}
                                        style={{ width: "30px", height: "30px" }}
                                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt="title"
                                        loading="lazy"
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" style={{ textAlign: "center" }} sx={{ mt: 3, mb: 2 }}>
                            <Stack direction="row" spacing={2} >
                                <Typography gutterBottom variant="subtitle1" component="div" whiteSpace='pre-wrap'>
                                    Already have an account?
                            </Typography>
                                <Link href="/login" variant="body2" sx={{ color: "red" }}>Login Now
                                </Link>
                            </Stack>
                        </Grid>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider>
    );
}