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
import { AppBar, Box, Container, Fab, IconButton, Stack, ThemeProvider, Toolbar, Tooltip } from '@mui/material';
import { RootState, useAppDispatch } from '../../redux-functionality';
import { siteTypeThunk } from "../../redux-functionality/slices/siteTypeSlice"
import Loading from '../Other/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import MenuCategory from './MenuCategory';
// import { customData } from "../../redux-functionality/slices/siteTypeSlice"

interface CategoryType {
    categoryID: string;
    categoryName: string;
    imageURL: string;
    menuID: string;
    order: string;
    restaurantID: string;
}


const Home = () => {

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

    if (isLoading) {
        return (
            <>
                <Navbar />
                <Loading />
            </>
        )
    }

    return (
        // <ThemeProvider theme={getThemeMain(themeInfo)}>
        <Box>
            <Fab
                component="div"
                onClick={() => openCart(itemsInCart)}
                size="medium"
                variant="circular"
                sx={{
                    borderRadius: 0,
                    borderTopLeftRadius: '50%',
                    borderBottomLeftRadius: '50%',
                    borderTopRightRadius: '50%',
                    borderBottomRightRadius: '4px',
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

            <Box sx={{ padding: "30px" }}>
                <AppBar
                    enableColorOnDark
                    position="fixed"
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
                </AppBar>
                <Stack className={!isLoading ? "home-content" : "home-content hidden"}>
                    <Stack sx={{ mb: "180px" }}>
                        <MenuCategory />
                    </Stack>
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
                    <Stack>
                        <Footer />
                    </Stack>
                    <EmptyCart show={emptyCartShow} closeCart={closeCart} />
                    <ItemsCart show={itemsCartShow} closeCart={closeCart} />
                </Stack>
            </Box>
        </Box>
        // </ThemeProvider>
    );
}

export default Home;
