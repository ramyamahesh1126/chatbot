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
                <nav className="bg-gray-200">
                    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
                        <div className="w-1/3 text-left">
                            <Link className="text-gray-800 hover:text-gray-600 font-bold" to="/">Home</Link>
                        </div>
                        <div className="w-1/3 text-center">
                            <Link className="text-gray-800 hover:text-gray-600 font-bold" to="/contact">Contact Us</Link>
                        </div>
                        <div className="w-1/3 text-right">
                            <Link className="text-gray-800 hover:text-gray-600 font-bold" to="/about">About</Link>
                            {/* Other navigation links go here */}
                        </div>
                    </div>
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