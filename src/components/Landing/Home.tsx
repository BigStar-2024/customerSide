import React, { useState, useEffect, useRef, RefObject } from 'react';
import Navbar from "./Navbar/Navbar";
import Category from './Category';
import Footer from '../Other/Footer';
import CartIcon from "./CartIcon";
import EmptyCart from './EmptyCart'
import ItemsCart from "./ItemsCart"
import { getThemeMain } from '../fetchData/ThemeMain'

import { menuData } from "../../helpers/menuData";
import { categoryData } from '../../helpers/categoryData';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useAppSelector } from '../../redux-functionality';
import { AppBar, Box, Container, Fab, Fade, Grid, IconButton, Stack, ThemeProvider, Toolbar, Tooltip, useScrollTrigger } from '@mui/material';
import { RootState, useAppDispatch } from '../../redux-functionality';
import { siteTypeThunk } from "../../redux-functionality/slices/siteTypeSlice"
import Loading from '../Other/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import MenuCategory from './MenuCategory';
import CenterComponent from "./Center/Center";
import SearchIcon from '@mui/icons-material/Search';
// import { customData } from "../../redux-functionality/slices/siteTypeSlice"

interface CategoryType {
    categoryID: string;
    categoryName: string;
    imageURL: string;
    menuID: string;
    order: string;
    restaurantID: string;
}


export function Home() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(siteTypeThunk()).unwrap();
    }, [dispatch]);

    const itemsInCart = useSelector((state: RootState) => {
        if (state && state.cartCounter && !!state.cartCounter.cartItems) {
            return state.cartCounter.cartItems.length
        } else {
            return 0;
        }
    });


    const themeInfo = useSelector((state: RootState) => state.siteType.siteTypeData);

    const [isLoading, setIsLoading] = useState(true);
    const [emptyCartShow, setEmptyCartShow] = useState(false);
    const [itemsCartShow, setItemsCartShow] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    const menuDatas = menuData.sort((a: any, b: any) => (a.order - b.order));

    const sortedCategories: CategoryType[] = menuDatas.flatMap((menuData) => {
        const categories = categoryData.filter((category) => category.menuID == menuData.menuID);
        categories.sort((a: any, b: any) => a.order - b.order);
        return categories;
    });

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    }, []);

    const openCart = (itemNumber: number) => {
        if (!!itemNumber) {
            setItemsCartShow(true);
        } else {
            setEmptyCartShow(true);
        }
    }

    const closeCart = () => {
        setEmptyCartShow(false);
        setItemsCartShow(false);
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        const centerElement = document.getElementById("centerCom");

        const rect = centerElement ? centerElement.getBoundingClientRect() : null;


        if (position > (rect ? rect.height / 2 : 0)) {
            setMenuShow(true);
        } else {
            setMenuShow(false);
        }
        // setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Grid container>

                <Fab
                    component="div"
                    onClick={() => openCart(itemsInCart)}
                    size="large"
                    variant="circular"
                    sx={{
                        borderRadius: "50%",
                        top: '80%',
                        position: 'fixed',
                        right: 10,
                        zIndex: 999,
                        backgroundColor: "gray"
                    }}
                >
                    {/* <IconButton > */}
                    <CartIcon cartNumber={itemsInCart} />
                    {/* </IconButton> */}
                </Fab>
                <Grid container item xs={12}>
                    <AppBar sx={{ backgroundColor: '#ffffff' }}>
                        <Toolbar>
                            <Navbar />
                        </Toolbar>
                        {
                            menuShow ? (
                                <Toolbar>
                                    <MenuCategory />
                                </Toolbar>
                            ) : (null)
                        }
                    </AppBar>
                </Grid>
                <Toolbar id="back-to-top-anchor" />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box id="centerCom" display={'flex'} justifyContent={'center'}>
                            <CenterComponent />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            (!menuShow) ? (
                                <Toolbar>
                                    <MenuCategory />
                                </Toolbar>
                            ) : (
                                    <Toolbar sx={{ visibility: 'hidden' }}>
                                        <MenuCategory />
                                    </Toolbar>
                                )
                        }
                    </Grid>
                    <Grid item xs={12} sx={{ mx: "8px" }}>
                        {
                            sortedCategories.map((category, index) => {
                                return (
                                    <Box key={`section-${category.categoryName}`} id={category.categoryName} >
                                        <Category categoryData={category} />
                                    </Box>
                                )
                            })
                        }
                    </Grid>

                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
                <ItemsCart show={itemsCartShow} closeCart={closeCart} />
                <EmptyCart show={emptyCartShow} closeCart={closeCart} />
            </Grid>

            {/* <Box>
                <Fab
                    component="div"
                    onClick={() => openCart(itemsInCart)}
                    size="large"
                    variant="circular"
                    sx={{
                        borderRadius: "50%",
                        top: '80%',
                        position: 'fixed',
                        right: 10,
                        zIndex: 999,
                        backgroundColor: "gray"
                    }}
                >
                    <IconButton >
                        <CartIcon cartNumber={itemsInCart} />
                    </IconButton>
                </Fab>

                <Stack>

                    <Stack sx={{ flexGrow: 1, position: "fixed", width: "100%", zIndex: 999 }} >
                        <AppBar
                            enableColorOnDark
                            position="static"
                            color="inherit"
                            elevation={0}
                            sx={{
                                // bgcolor: theme.palette.background.default,
                                // transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                            }}
                        >
                            <Toolbar>
                                <Navbar />
                            </Toolbar>
                            {
                                menuShow ? (
                                    <Toolbar>
                                        <MenuCategory />
                                    </Toolbar>
                                ) : (null)
                            }
                        </AppBar>
                    </Stack>
                    <Toolbar />
                    <Stack sx={{ mx: "10px" }}>
                        <Box id="centerCom">
                            <CenterComponent />
                        </Box>
                        {
                            (!menuShow) ? (
                                <MenuCategory />
                            ) : (
                                    null
                                )
                        }
                        <Stack sx={{ mb: "30px" }}>
                            {
                                sortedCategories.map((category, index) => {
                                    return (
                                        <Box key={`section-${category.categoryName}`} id={category.categoryName} >
                                            <Category categoryData={category} />
                                        </Box>
                                    )
                                })
                            }
                        </Stack>
                        <Footer />
                        <EmptyCart show={emptyCartShow} closeCart={closeCart} />
                        <ItemsCart show={itemsCartShow} closeCart={closeCart} />
                    </Stack>
                </Stack>
            </Box> */}


        </>
        // <ThemeProvider theme={getThemeMain(themeInfo)}>
        // </ThemeProvider>
    );
}

export default Home;
