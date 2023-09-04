import React, { useState, useEffect, useRef } from 'react';
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
import Cart from './Cart'

// interface Food {
//     foodImg: string;
//     foodName: string;
//     foodDescription: string;
//     foodPrice: string;
//     foodStatus: string;
// }

// interface MenuData {
//     menuTitle: string[];
//     foods: Food[];
// }

// const menuDatas: MenuData = {
//     menuTitle: ["Menu1", "Menu2", "Menu3"],
//     foods: [
//         {
//             foodImg: food1,
//             foodName: "Cheese Burger",
//             foodDescription: "Entree Ingredient information",
//             foodPrice: "$6.57",
//             foodStatus: "Popular"
//         },
//         {
//             foodImg: food2,
//             foodName: "Burger & Fires",
//             foodDescription: "Entree Ingredient information",
//             foodPrice: "$8.11",
//             foodStatus: "Recommended"
//         },
//         {
//             foodImg: food3,
//             foodName: "Pizza",
//             foodDescription: "Entree Ingredient information",
//             foodPrice: "$10",
//             foodStatus: "Recommended"
//         },
//         {
//             foodImg: food4,
//             foodName: "Cheese Pizza",
//             foodDescription: "Entree Ingredient information",
//             foodPrice: "$12.3",
//             foodStatus: "Popular"
//         }
//     ]
// };



// const menuDatas: string[] = ["Menu1", "Menu2", "Menu3"]

const scrollToDiv = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
        window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

    }
}



const Home = () => {

    const [cartData, setCartData] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    const [cartShow, setCartShow] = useState(false);

    const categoryRef1 = useRef(null);
    const categoryRef2 = useRef(null);
    const categoryRef3 = useRef(null);
    const categoryRef4 = useRef(null);
    // "category1", "category2", "category3", "category4"
    const handleCategory = (categoryTitle: string) => {
        console.log("cate", categoryTitle);
        if (categoryTitle == "category1")
            scrollToDiv(categoryRef1);
        if (categoryTitle == "category2")
            scrollToDiv(categoryRef2);
        if (categoryTitle == "category3")
            scrollToDiv(categoryRef3);
        if (categoryTitle == "category4")
            scrollToDiv(categoryRef4);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const openCart = () => {
        setCartShow(true);
    }

    const closeCart = () => {
        setCartShow(false);
        console.log("closeCart");
    }

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
                            onClick={openCart}
                        >
                            <CartIcon cartNumber={cartData} />
                        </div>
                        <div className="Navbar">
                            <Navbar CategoryClick={handleCategory} />
                        </div>
                        <div className="home-food-content">
                            <div ref={categoryRef1} className="Category1">
                                <Category categoryName="Category1" />
                            </div>
                            <div ref={categoryRef2} className="Category2">
                                <Category categoryName="Category2" />
                            </div>
                            <div ref={categoryRef3} className="Category3">
                                <Category categoryName="Category3" />
                            </div>
                            <div ref={categoryRef4} className="Category4">
                                <Category categoryName="Category4" />
                            </div>
                            <div className="home-foot">y
                                <Footer />
                            </div>
                        </div>
                        <Cart show={cartShow} closeCart={closeCart} />
                    </>
                )}
        </div>
    );
}

export default Home;