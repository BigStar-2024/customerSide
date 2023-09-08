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
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// function Copyright(props: any) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//       </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

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

    const [gender, setGender] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
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
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="Username"
                                    required
                                    fullWidth
                                    id="Username"
                                    label="UserName"
                                    autoFocus
                                />
                            </Grid>
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
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        label="Gender"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={1}>Male</MenuItem>
                                        <MenuItem value={2}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Date of Birth" sx={{ width: "100%" }} />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
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