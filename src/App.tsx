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
import Navbar from "./components/Landing/Navbar";
import AddItem from './components/AddItem/AddItem';

import { persistor, store } from './store';

import { Provider, useDispatch } from 'react-redux';
import Payment from "./components/Payment/payment";


{/* <Route path="/item">
    <Route path="/item/men">
        <Route path=":id" element={<ItemView />} />
    </Route>
    <Route path="/item/women">
        <Route path=":id" element={<ItemView />} />
    </Route>
    <Route path="/item/kids">
        <Route path=":id" element={<ItemView />} />
    </Route>
    <Route path="/item/featured">
        <Route path=":id" element={<ItemView />} />
    </Route>
</Route> */}

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Payment />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/item">
                        <Route path="/item/">
                            <Route path=":id" element={<AddItem />} />
                        </Route>
                    </Route>
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </Router >
        </div>
    );
}

export default App;



