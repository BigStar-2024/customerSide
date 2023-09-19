import * as React from 'react';
import Grid from '@mui/material/Grid';
import Navbar from "../Landing/Navbar/Navbar";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Menu1 from '../Landing/Category';
import MenuX from "../../Assets/MenuX.svg"
import facebookBtn from "../../Assets/facebook_btn.png"
import instagramBtn from '../../Assets/instagram_btn.png';
import brand2 from '../../Assets/brand2.png';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import googleBtn from '../../Assets/google_btn.png';
import appleBtn from '../../Assets/apple_btn.png';



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

const Footer = () => {
    return (
        <Box maxWidth={"450px"} style={{ margin: "auto" }} justifyContent={"center"} alignItems={"center"}>
            <Grid container spacing={2} >
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
    )
}

export default Footer;