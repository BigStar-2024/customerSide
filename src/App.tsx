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
import Track from "./components/Tracking/Track"
import { Provider, useDispatch } from 'react-redux';
import Payment from "./components/Payment/payment";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
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

export default App;



