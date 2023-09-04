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

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<AddItem />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router >
        </div>
    );
}

export default App;



