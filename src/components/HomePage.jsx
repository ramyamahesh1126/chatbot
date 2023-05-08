import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Routes, useNavigate} from 'react-router-dom';
import axios from 'axios';

function HomePage() {
    const navigateTo = useNavigate();
    const [websiteAddress, setWebsiteAddress] = useState('');
    const [scrapestatus,setScrapeStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent default form submission behavior
        console.log('Form submitted!');
        const websiteAddressInput = document.querySelector('#website-address');
        const websiteAddressValue = websiteAddressInput.value;
        console.log(websiteAddressValue);
        setWebsiteAddress(websiteAddressValue);

        const requrl = `http://ec2-54-183-94-29.us-west-1.compute.amazonaws.com:8000/scrape/${websiteAddressValue}`
        console.log(requrl);

        const config = {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          };

        // make a GET request to the backend
        //There are 2 status - Success and Error
        axios.get(requrl, config)
        .then((response) => {
          // handle successful response
          console.log(response.data.status);
          setScrapeStatus(response.data.status);
          navigateTo('./Chatbot', { state: { status: 'Success', address: websiteAddressValue } });
        })
        .catch((error) => {
          // handle error
          console.log('Error fetching data');
          setScrapeStatus('Error');
          navigateTo('./Chatbot', { state: { status: 'Error', address: websiteAddressValue } });
        });
    };

    return (
        <div>
            <main className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold italic text-plum text-gray-800 mb-8">ThinkBot</h1>
            <div className="containerText text-center">
                <h2 className=" font-bold mb-8 text-gray-800">One stop solution for all the enterprise questions!<br/>Talk to us anytime, anywhere.</h2>
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-md flex flex-col">
                <label htmlFor="website-address" className="text-black font-bold mb-2">Ready to get your questions answered? Enter the website address</label>
                <div className="flex flex-col w-full">
                    <input
                        id="website-address"
                        type="url"
                        className="border border-gray-600 py-2 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent mr-2 bg-white text-black"
                    />
                    <button
                        type="submit"
                        className=" mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ml-2"
                    >
                        Submit
                    </button>
                </div>
            </form>
            </main>
        </div>
    );
}

export default HomePage;