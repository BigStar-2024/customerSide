import React, { useState, useEffect, useRef, RefObject } from 'react';
import Navbar from "./Navbar";
import Category from './Category';
import Footer from '../Other/Footer';
import Loading from "../Other/Loading"
import CartIcon from "./CartIcon";
import food1 from '../../Assets/food1.png'
import food2 from '../../Assets/food2.png'
import food3 from '../../Assets/food3.png'
import food4 from '../../Assets/food4.png'
import food5 from '../../Assets/food5.png'
import food6 from '../../Assets/food6.png'
import EmptyCart from './EmptyCart'
import ItemsCart from "./ItemsCart"

import { menuData } from "../../helpers/menuData";
import { categoryData } from '../../helpers/categoryData';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../redux-functionality';


interface CategoryType {
    categoryID: string;
    categoryName: string;
    imageURL: string;
    menuID: string;
    order: string;
    restaurantID: string;
}

const scrollToDiv = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
        window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

    }
}

const Home = () => {


    const itemsInCart = useSelector((state: RootState) => {
        if (state && state.cartCounter && !!state.cartCounter.cartItems) {
            return state.cartCounter.cartItems.length
        } else {
            return 0;
        }
    });

    const [isLoading, setIsLoading] = useState(true);
    const [emptyCartShow, setEmptyCartShow] = useState(false);
    const [itemsCartShow, setItemsCartShow] = useState(false);

    const menuDatas = menuData.sort((a: any, b: any) => (a.order - b.order));


    // "category1", "category2", "category3", "category4"
    const categoryRefs = useRef<RefObject<HTMLDivElement>[]>([]);

    const sortedCategories: CategoryType[] = menuDatas.flatMap((menuData) => {
        const categories = categoryData.filter((category) => category.menuID == menuData.menuID);
        categories.sort((a: any, b: any) => a.order - b.order);
        return categories;
    });


    const handleCategory = (categoryTitle: string) => {
        // const categoryIndex = sortedCategories.findIndex((category) => category.categoryName === categoryTitle);
        // if (categoryIndex !== -1 && categoryRefs.current[categoryIndex] && categoryRefs.current[categoryIndex].current) {
        //     scrollToDiv(categoryRefs.current[categoryIndex]);
        // }
    }

    // useEffect(() => {
    //     categoryRefs.current = Array(sortedCategories.length)
    //         .fill(null)
    //         .map(() => useRef<HTMLDivElement>(null));
    // }, [sortedCategories]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
        console.log("closeCart");
    }


    // console.log("sortedCategories", sortedCategories);

    // console.log("menuDatas", menuDatas);

    return (
        <div className="home-container">
            {isLoading ? (
                <Loading />
            ) : (
                    <>
                        <div
                            style={{
                                position: 'fixed',
                                top: '50%',
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
                            <Navbar CategoryClick={handleCategory} />
                        </div>
                        <div className="home-food-content">
                            {
                                sortedCategories.map((category, index) => {
                                    // const newCategoryRef = useRef<HTMLDivElement>(null);
                                    // categoryRefs.current[index] = newCategoryRef;
                                    return (
                                        <>
                                            {/* <div ref={newCategoryRef} > */}
                                            <Category categoryData={category} key={index} />
                                            {/* </div> */}
                                        </>
                                    )
                                })

                            }
                            <div className="home-foot">
                                <Footer />
                            </div>
                        </div>
                        <EmptyCart show={emptyCartShow} closeCart={closeCart} />
                        <ItemsCart show={itemsCartShow} closeCart={closeCart} />
                    </>
                )}
        </div>
    );
}

export default Home;