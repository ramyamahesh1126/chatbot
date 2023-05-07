import React from 'react';
import { BrowserRouter as Router,Route, Routes, useNavigate} from 'react-router-dom';

function HomePage() {
    const navigateTo = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        navigateTo('./Chatbot'); // navigate to second page
    };

    return (
        <div className="container">
            <main>
                <div className="flex items-center">
                    <img src="src/components/logo.png" className="w-10 h-10 mr-4"/>
                        <h1 className="text-2xl font-bold">ThinkBot</h1>
                </div>
                <div className="containerText">
                    <h2 style={{fontFamily: 'Times-Roman', fontWeight: 'bold', color: 'white'}}>One stop solution for
                        all the enterprise questions!<br/>Talk to us anytime, anywhere.</h2>
                </div>
                <form className="flex flex-col items-center"
                      style={{fontFamily: 'Times-Roman', fontWeight: 'bold', color: 'white'}} onSubmit={handleSubmit}>
                    <label htmlFor="website-address">Ready to get your questions answered? Enter the website
                        address</label>
                    <div className="flex">
                        <input id="website-address" type="text" style={{ marginRight: '10px' }}
                               className="border border-gray-600 py-2 px-20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"/>
                        <button type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">Submit
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default HomePage;