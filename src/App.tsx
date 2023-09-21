import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as React from 'react';
// import About from "./components/Login/About";
// import Work from "./components/Login/Work";
// import Testimonial from "./components/Login/Testimonial";
// import {Route} from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Landing/Home';
import Navbar from "./components/Landing/Navbar/Navbar";
import AddItem from './components/AddItem/AddItem';

import { RootState, useAppDispatch } from './redux-functionality';
import Track from "./components/Tracking/Track"
import { Provider, useDispatch } from 'react-redux';
import Payment from "./components/Payment/payment";
import { useEffect } from "react";
import { siteTypeThunk } from "./redux-functionality/slices/siteTypeSlice";
import { ThemeProvider } from "@mui/material"

// import Scroll from "./components/AddItem/SecondExample"

function App() {

    // const dispatch = useAppDispatch();

    // useEffect(() => {

    //     dispatch(siteTypeThunk()).unwrap();

    // }, [dispatch]);


    return (
        <div >
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/item">
                        <Route path="/item/">
                            <Route path=":id" element={<AddItem />} />
                        </Route>
                    </Route>
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/track" element={<Track />} />
                </Routes>
            </Router >
        </div>
    );
}

// render={() =>
//             currentUser ? <OrdersPage /> : <SignInAndSignUpPage />
//           }

export default App;



