import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import React from "react";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Booking from "./Pages/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
