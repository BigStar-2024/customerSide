import React, { useState, useEffect, useRef, RefObject } from 'react';
import Navbar from "./Navbar";
import Category from './Category';
import Footer from '../Other/Footer';
import CartIcon from "./CartIcon";
import EmptyCart from './EmptyCart'
import ItemsCart from "./ItemsCart"
import { getThemeMain } from '../fetchData/ThemeMain'

import { menuData } from "../../helpers/menuData";
import { categoryData } from '../../helpers/categoryData';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Box, Container, Fab, IconButton, Stack, ThemeProvider, Tooltip } from '@mui/material';
import { RootState, useAppDispatch } from '../../redux-functionality';
import { siteTypeThunk } from "../../redux-functionality/slices/siteTypeSlice"
import Loading from '../Other/Loading';
import { toast } from 'react-toastify';
// import { customData } from "../../redux-functionality/slices/siteTypeSlice"

interface CategoryType {
    categoryID: string;
    categoryName: string;
    imageURL: string;
    menuID: string;
    order: string;
    restaurantID: string;
}

// useSelector((state: RootState) => state.siteType.siteTypeData);

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
        // console.log("closeCart");
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

            <ThemeProvider theme={getThemeMain(themeInfo)}>
                <Box sx={{ padding: "30px", backgroundColor: themeInfo.backgroundColor }}>
                    <Stack className={!isLoading ? "home-content" : "home-content hidden"}>

                        <Stack sx={{ mb: "200px" }}>
                            <Navbar />
                        </Stack>
                        <Stack>
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
            </ThemeProvider>
        </Box>
    );
}

export default Home;



{/* <div className="home-container">
                {isLoading && <Loading />}
                <div className={!isLoading ? "home-content" : "home-content hidden"}>
                    <div
                        style={{
                            position: 'fixed',
                            top: '90%',
                            right: '0',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 999,
                            backgroundColor: 'gray',
                            borderRadius: '50%',
                            padding: '5px',
                        }}
                        onClick={() => openCart(itemsInCart)}
                    >
                        <CartIcon cartNumber={itemsInCart} />
                    </div>
                    <div className="Navbar">
                        <Navbar />
                    </div>
                    <div className="home-food-content">
                        {
                            sortedCategories.map((category, index) => {

                                return (
                                    <Box key={`section-${category.categoryName}`} id={category.categoryName}>
                                        
                                        <Category categoryData={category} />
                                        

                                    </Box>
                                )
                            })
                        }
                        <div className="home-foot">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div> */}