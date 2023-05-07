import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import HomePage from './HomePage';
import Chatbot from './Chatbot';

function MainPage(){

    return (
            <Router>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link> </li>
                        <li><Link to="/contact">Contact</Link> </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/"  element={<HomePage />} />
                    <Route path="/about"  element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Chatbot" element={<Chatbot />} />
                </Routes>
            </Router>
    )
}

export default MainPage;