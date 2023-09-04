import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import brand2 from '../../Assets/brand2.png';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import facebookBtn from '../../Assets/facebook_btn.png';
import instagramBtn from '../../Assets/instagram_btn.png';
import googleBtn from '../../Assets/google_btn.png';
import appleBtn from '../../Assets/apple_btn.png';


// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {' '}
            {new Date().getFullYear()}
            {' . '}

            <Link color="inherit" href="/home">
                MenuX
            </Link> <br />
            {'All rights reserved'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) ~ :not(style)': {
            marginTop: theme.spacing(2),
        },
    }));

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box >
                        <img src={MenuX} alt="Website Logo" style={{ width: "50px" }} />
                    </Box>
                    <Typography component="h1" variant="h5">
                        Welcome back!
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Glad to see you, Again!
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <FormControl sx={{ width: '40ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="error"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
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
                        <Grid container justifyContent="flex-center" style={{ textAlign: "center" }} sx={{ mt: 3, mb: 2 }}>
                            <Grid item xs={12}>
                                Don't have an account?
                                <Link href="/register" variant="body2" style={{ color: "red" }}>
                                    Register Now
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item container xs={12} style={{ textAlign: "center" }} >
                            <Grid item xs={12}>
                                <img src={brand2} alt="Website Logo" />
                            </Grid>
                            <Grid item xs={12}>
                                <Copyright sx={{ mt: 5 }} />
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} spacing={0} textAlign={'center'} display={'flex'}>
                            <Grid item container xs={12}>
                                <Grid item xs={2}><FacebookRoundedIcon className="link-icons" /></Grid>
                                <Grid item xs={2}><LinkedInIcon className="link-icons" /></Grid>
                                <Grid item xs={2}><InstagramIcon className="link-icons" /></Grid>
                                <Grid item xs={2}><TwitterIcon className="link-icons" /></Grid>
                                <Grid item xs={2}><FacebookRoundedIcon className="link-icons" /></Grid>
                                <Grid item xs={2}><CircleNotificationsRoundedIcon className="link-icons" /></Grid>

                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={2}></Grid>
                                <Grid item xs={2}><FacebookRoundedIcon className="link-icons" /></Grid>
                                <Grid item xs={2}><YouTubeIcon className="link-icons" /></Grid>
                                <Grid item xs={2}><LanguageIcon className="link-icons" /></Grid>
                                <Grid item xs={2}><FacebookRoundedIcon className="link-icons" /></Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} md={12} textAlign={"center"}>
                            <Grid item xs={12} >
                                <img src={MenuX} alt="Website Logo" style={{ width: "30px" }} />
                            </Grid>
                            <Grid item container xs={12} spacing={5}>
                                <Grid item xs={6} textAlign={"end"}>
                                    <img
                                        src={facebookBtn}
                                        style={{ width: "30px", height: "30px" }}
                                        alt="title"
                                        loading="lazy"
                                    />
                                </Grid>
                                <Grid item xs={6} textAlign={"left"}>
                                    <img
                                        src={instagramBtn}
                                        style={{ width: "30px", height: "30px" }}
                                        alt="title"
                                        loading="lazy"
                                    />

                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Link href="/register" variant="body2">
                                    www.menuxdigital.com
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}