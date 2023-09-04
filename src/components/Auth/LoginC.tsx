import React from "react";
import { Divider, IconButton, Container, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import googleBtn from "../../Assets/google_btn.png";
// import Paper from '@mui/material/Paper';
import instagramBtn from "../../Assets/instagram_btn.png";
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import facebookBtn from "../../Assets/facebook_btn.png";
import appleBtn from "../../Assets/apple_btn.png";
import brand2 from "../../Assets/brand2.png";
import MenuX from "../../Assets/MenuX.svg"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Contact = () => {
    const Root = styled("div")(({ theme }) => ({
        width: "100%",
        ...theme.typography.body2,
        "& > :not(style) ~ :not(style)": {
            marginTop: theme.spacing(2),
        },
    }));

    return (
        <Container style={{ marginTop: "30px", marginBottom: "20px" }}>
            <Box >
                <IconButton>
                    <KeyboardBackspaceIcon />
                </IconButton>
            </Box>
            <Box >
                <img src={MenuX} alt="Website Logo" style={{ width: "50px" }} />
            </Box>
            <Box>
                <h5 className="primary-heading">
                    Welcome back!
          <br />
                    Glad to see you, Again!
        </h5>
            </Box>
            <Box>
                <div className="contact-form-container">
                    <input type="text" placeholder="Enter your email" />
                </div>
            </Box>
            <Box>
                <div className="contact-form-container">
                    <input type="password" placeholder="Enter your password" />
                </div>
            </Box>
            <Box>
                <button className="secondary-button">Login</button>
            </Box>
            <Box>
                <Root>
                    <Divider className="register-divider" style={{ marginTop: "3rem" }}>
                        Or Register with
          </Divider>
                </Root>
            </Box>
            <Grid container mt={5} className="register-divider">
                <Grid container justifyContent={"center"} spacing={3}>
                    <Grid item>
                        <IconButton
                            className="register-btn-border"
                            aria-label="delete"
                            color="primary"
                        >
                            <img
                                src={googleBtn}
                                style={{ width: "50px", height: "50px" }}
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="title"
                                loading="lazy"
                            />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="delete" color="primary">
                            <img
                                src={instagramBtn}
                                style={{ width: "50px", height: "50px" }}
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="title"
                                loading="lazy"
                            />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="delete" color="primary">
                            <img
                                src={facebookBtn}
                                style={{ width: "50px", height: "50px" }}
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="title"
                                loading="lazy"
                            />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="delete" color="primary">
                            <img
                                src={appleBtn}
                                style={{ width: "50px", height: "50px" }}
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="title"
                                loading="lazy"
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Box>
                <Grid container spacing={2} style={{ 'textAlign': "center" }} className="register-divider">
                    <Grid item xs={12} md={12}>
                        <Typography variant="body2" gutterBottom style={{ display: 'inline', whiteSpace: 'nowrap' }}>
                            Don't have an account? <Link href="/register" color="#ff0000">Register Now</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2} style={{ 'textAlign': "center" }} className="register-divider">
                    <Grid item xs={12} md={12} >
                        <img src={brand2} alt="Website Logo" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <p>Copyright @ 2023 MenuX</p>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <p>All rights reserved</p>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <FacebookRoundedIcon className="link-icons" />
                        <LinkedInIcon className="link-icons" />
                        <InstagramIcon className="link-icons" />
                        <TwitterIcon className="link-icons" />
                        <FacebookRoundedIcon className="link-icons" />
                        <CircleNotificationsRoundedIcon className="link-icons" />
                        <FacebookRoundedIcon className="link-icons" />
                        <YouTubeIcon className="link-icons" />
                        <LanguageIcon className="link-icons" />
                        <FacebookRoundedIcon className="link-icons" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img src={MenuX} alt="Website Logo" style={{ width: "40px" }} />
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3} md={3}>
                        <IconButton aria-label="delete" color="primary">
                            <img
                                src={facebookBtn}
                                style={{ width: "50px", height: "50px" }}
                                alt="title"
                                loading="lazy"
                            />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} md={3}>
                        <IconButton aria-label="delete" color="primary">
                            <img
                                src={instagramBtn}
                                style={{ width: "50px", height: "50px" }}
                                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt="title"
                                loading="lazy"
                            />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} md={12}>
                        <p>www.menuxdigital.com</p>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Contact;