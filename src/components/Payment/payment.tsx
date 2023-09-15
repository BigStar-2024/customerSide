import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import { Link, Card } from '@mui/material';
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

import Google from '../../Assets/icons/google.svg'
import Twitter from '../../Assets/icons/twitter.svg';
import Facebook from '../../Assets/icons/facebook.svg';

import AnimateButton from '../Other/AnimateButton';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Stack } from '@mui/material';

import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { } from '@mui/material/styles';
import {
    FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import Background1 from "../../Assets/payment/background1.jpg"
import visa from "../../Assets/icons/visa.png"
import master from "../../Assets/icons/master.png"
import maestro from "../../Assets/icons/maestro.png"
import discover from "../../Assets/icons/discover.png"
import { useLocation, useNavigate } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';

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

const styles = {
    backgroundImage: { Background1 },
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};


export default function SignUp() {


    const navigate = useNavigate();

    const handleOrder = () => {
        navigate("/track");
    }

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
    const location = useLocation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    const googleHandler = async () => {
        // login || singup
    };

    const twitterHandler = async () => {
        // login || singup
    };

    const facebookHandler = async () => {
        // login || singup
    };


    interface StyledFormControlLabelProps extends FormControlLabelProps {
        checked: boolean;
    }

    const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
        <FormControlLabel {...props} />
    ))(({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }));

    function MyFormControlLabel(props: FormControlLabelProps) {
        const radioGroup = useRadioGroup();

        let checked = false;

        if (radioGroup) {
            checked = radioGroup.value === props.value;
        }

        return <StyledFormControlLabel checked={checked} {...props} />;
    }

    return (
        <>
            <div style={{
                backgroundImage: Background1,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <Stack direction="row" sx={{ mt: "50px" }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={4}>



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
                                        <Typography component="h1" variant="h5">
                                            Payment
                                        </Typography>
                                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <InputLabel htmlFor="email-login">Email or phone</InputLabel>
                                                    <OutlinedInput
                                                        id="email-login"
                                                        type="email"
                                                        value={location.state}
                                                        name="email"
                                                        // onChange={feedEmailChanged}
                                                        placeholder="Enter email address"
                                                        fullWidth

                                                    />
                                                    {/* <TextField label={'margin="none"'} id="margin-none"
                                                        value={location.state}
                                                        InputProps={{
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <AccountCircle />
                                                                </InputAdornment>
                                                            ),
                                                        }} /> */}
                                                </Grid>
                                                <Grid item xs={12}>

                                                    <Root sx={{ mt: 5 }}>
                                                        <Divider>Or Register with</Divider>
                                                    </Root>
                                                </Grid>
                                            </Grid>

                                            <Grid container spacing={2} sx={{ mt: 2 }} textAlign={"center"}>
                                                <Grid item xs={4}>
                                                    <Button variant="outlined" href="https://www.google.com/" size="small">
                                                        <img
                                                            src={googleBtn}
                                                            style={{ width: "30px", height: "30px" }}
                                                            alt="title"
                                                            loading="lazy"
                                                        />
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={4}>
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
                                                <Grid item xs={4}>
                                                    <Button variant="outlined" href="https://www.facebook.com/" size="small">
                                                        <img
                                                            src={facebookBtn}
                                                            style={{ width: "30px", height: "30px" }}
                                                            alt="title"
                                                            loading="lazy"
                                                        />
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Grid container justifyContent="flex-center" style={{ textAlign: "center" }} sx={{ mt: 3, mb: 2 }}>
                                                <Grid item xs={12}>
                                                    Don't have an account?
                                        </Grid>
                                                <Grid item xs={12}>

                                                    <Link href="/register" variant="body2" style={{ textDecoration: "none", color: "red" }}>
                                                        Sign up with
                                            </Link>
                                                    <Box display="flex" justifyContent="center">

                                                        <Divider sx={{ width: "30%", }} />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Container>

                            </ThemeProvider>
                            <Divider />

                        </Grid>
                        <Grid item xs={12} md={4}>

                            <Stack >

                                <ThemeProvider theme={defaultTheme}>
                                    <Container component="main" maxWidth="xs">
                                        <CssBaseline />
                                        <Box
                                            sx={{
                                                marginTop: 3,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'left',
                                            }}
                                        >
                                            <Typography component="h1" variant="h5">
                                                Payment Method
                                </Typography>
                                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <FormControl sx={{}} variant="outlined">

                                                            <RadioGroup name="use-radio-group" defaultValue="card">
                                                                <MyFormControlLabel value="cash" label="cash" control={<Radio />} />
                                                                <MyFormControlLabel value="card" label="card" control={<Radio />} />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={2} sx={{ mt: 2 }} textAlign={"center"}>
                                                    <Grid item xs={3}>
                                                        <Button variant="outlined" href="https://www.google.com/" size="small">
                                                            <img
                                                                src={visa}
                                                                style={{ width: "50px", height: "30px" }}
                                                                alt="title"
                                                                loading="lazy"
                                                            />
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Button variant="outlined" href="https://www.instagram.com/" size="small">
                                                            <img
                                                                src={discover}
                                                                style={{ width: "50px", height: "30px" }}
                                                                alt="title"
                                                                loading="lazy"
                                                            />
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Button variant="outlined"
                                                            href="https://www.facebook.com/" size="small">
                                                            <img
                                                                src={maestro}
                                                                style={{ width: "50px", height: "30px" }}
                                                                alt="title"
                                                                loading="lazy"
                                                            />
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Button variant="outlined" href="https://www.facebook.com/" size="small">
                                                            <img
                                                                src={master}
                                                                style={{ width: "50px", height: "30px" }}
                                                                alt="title"
                                                                loading="lazy"
                                                            />
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                                <Grid container sx={{ mt: 5, mb: 2 }} spacing={3}>
                                                    <Grid item xs={12}>
                                                        <InputLabel htmlFor="card-login">Card</InputLabel>
                                                        <OutlinedInput
                                                            id="cardNumber"
                                                            type="TableNumber"
                                                            name="card"
                                                            // onChange={feedEmailChanged}
                                                            placeholder="number"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <InputLabel htmlFor="expiration-login">Expiration</InputLabel>
                                                        <OutlinedInput
                                                            id="dateCard"
                                                            type="number"
                                                            name="dateCard"
                                                            // onChange={feedEmailChanged}
                                                            placeholder="date"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <InputLabel htmlFor="CVV-login">CVV</InputLabel>
                                                        <OutlinedInput
                                                            id="cvvCode"
                                                            type="text"
                                                            name="code"
                                                            // onChange={feedEmailChanged}
                                                            placeholder="code"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Container>
                                    <Divider />

                                </ThemeProvider>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>

                            <Stack >
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
                                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <InputLabel htmlFor="tableNumber-login">Table</InputLabel>
                                                        <OutlinedInput
                                                            id="table-login"
                                                            type="Number"
                                                            name="number"
                                                            // onChange={feedEmailChanged}
                                                            placeholder="Number"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>

                                                        <InputLabel htmlFor="tableNumber-login">Enter coupon</InputLabel>
                                                        <OutlinedInput
                                                            id="code-login"
                                                            type="code"
                                                            name="code"
                                                            // onChange={feedEmailChanged}
                                                            placeholder="code"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                </Grid>
                                                {/* <AnimateButton>
                                                        <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                                                            Login
                                                                      </Button>
                                                    </AnimateButton> */}

                                                <Grid container spacing={2} sx={{ mt: 2 }} textAlign={"center"}>
                                                    <Grid item xs={12}>
                                                        <InputLabel htmlFor="enterCoupon-login">Add Tip</InputLabel>
                                                    </Grid>
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
                                                <Grid container sx={{ mt: 3, mb: 2 }} spacing={2}>
                                                    {/* <Grid item xs={12}>
                                            <InputLabel htmlFor="tip-login">Custom Tip</InputLabel>
                                            <OutlinedInput
                                                id="tip-login"
                                                type="text"
                                                name="tip"
                                                // onChange={feedEmailChanged}
                                                placeholder=""
                                                fullWidth
                                            />
                                        </Grid> */}
                                                    <Grid item xs={12}>
                                                        <InputLabel htmlFor="tip-login">Custom Tip</InputLabel>
                                                        <OutlinedInput
                                                            id="tip-login"
                                                            type="text"
                                                            name="tip"
                                                            // onChange={feedEmailChanged}
                                                            placeholder=""
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <InputLabel htmlFor="comment">Comments</InputLabel >
                                                        <TextField
                                                            placeholder="Enter comment"
                                                            multiline
                                                            rows={3}
                                                            maxRows={3}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item container xs={12} sx={{ mt: "5px" }} spacing={3}>
                                                        <Grid item xs={9}>

                                                            <Typography component="h1" variant="h5">
                                                                Price
                                                </Typography>

                                                        </Grid>

                                                        <Grid item xs={3}>

                                                            <Typography component="h1" variant="h6" fontWeight="bold">
                                                                $0.00
                                                </Typography>
                                                        </Grid>
                                                        <Grid item xs={9}>

                                                            <Typography component="h1" variant="h5">
                                                                Tax
                                                </Typography>

                                                        </Grid>

                                                        <Grid item xs={3}>

                                                            <Typography component="h1" variant="h6" fontWeight="bold">
                                                                $0.00
                                                </Typography>
                                                        </Grid>
                                                        <Grid item xs={9}>

                                                            <Typography component="h1" variant="h5">
                                                                Promotion
                                                </Typography>

                                                        </Grid>

                                                        <Grid item xs={3}>

                                                            <Typography component="h1" variant="h6" fontWeight="light">
                                                                {"$ -0.00"}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={9}>

                                                            <Typography component="h1" variant="h5">
                                                                Total
                                                </Typography>

                                                        </Grid>

                                                        <Grid item xs={3}>
                                                            <Typography component="h1" variant="h4" fontWeight="bold">
                                                                $0.00
                                                </Typography>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Box>
                                    </Container>

                                </ThemeProvider>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sx={{ margin: "auto" }} display={"flex"} justifyContent={"center"}>
                            <Button onClick={handleOrder} variant="contained">Submit Order</Button>
                        </Grid>
                    </Grid>


                </Stack>
            </div>
        </>
    );
}