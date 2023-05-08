import React from 'react';

function About() {
    return (
        <div className="container1 my-24 px-6 mx-auto">

            <section className="mb-32 text-gray-800 text-center">
            <div class="bg-white shadow-md rounded-md p-6 mx-4 my-8">
                <h1 class="text-3xl font-bold mb-5">About Us</h1>
                <p class="text-gray-800">Welcome to our graduate college project website! Our team is made up of highly motivated and talented individuals who are passionate about advancing their knowledge and skills in our respective fields.</p>
                <p class="text-gray-800">Our project is focused on bringing chatbot application for enterprises. We believe that our project has the potential to make a significant impact in the enterprise industry.</p>
                <p class="text-gray-800">Thank you for taking the time to learn more about our project and our team. We look forward to sharing our progress with you and making a meaningful contribution to our field.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
                <h1 className="text-3xl font-bold mb-5 mx-4 my-8">Our Mission</h1>
                <p className="mb-8">
                    Our mission is to provide a seamless and efficient experience for users to interact with the website and receive the information they need. Our goal is to create a friendly and approachable chatbot that can assist users in navigating the website, finding relevant information, and answering any questions they may have.
                </p>
            </div>
            <h2 className="text-3xl font-bold mb-32">Meet the team</h2> 
                <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">
                    <div className="mb-24 md:mb-0">
                        <div className="rounded-lg shadow-lg h-full block bg-white">
                            <div className="flex justify-center">
                                <div className="flex justify-center" style= {{marginTop: "-75px"}}>
                                    <img src="src/components/Ashika.png"
                                         className="rounded-full mx-auto shadow-lg" alt=""
                                         style= {{width: "150px"}}/>
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="text-lg font-bold mb-4">Ashika Anand Babu</h5>
                                <p className="mb-6">SJSU Graduate Student</p>
                                <ul className="list-inside flex mx-auto justify-center">
                                    <a href="https://www.linkedin.com/in/ashikaa/" className="px-2" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                             className="w-4 h-4 text-blue-600">
                                            <path fill="currentColor"
                                                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                                        </svg>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-24 md:mb-0">
                        <div className="rounded-lg shadow-lg h-full block bg-white">
                            <div className="flex justify-center">
                                <div className="flex justify-center" style={{marginTop: "-75px"}}>
                                    <img src="src/components/Ramya.jpeg"
                                         className="rounded-full mx-auto shadow-lg" alt=""
                                         style= {{width: "150px"}}/>
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="text-lg font-bold mb-4">Ramya Mahesh</h5>
                                <p className="mb-6">SJSU Graduate Student</p>
                                <ul className="list-inside flex mx-auto justify-center">
                                    <a href="https://www.linkedin.com/in/ramyamahesh1126/" className="px-2" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                             className="w-4 h-4 text-blue-600">
                                            <path fill="currentColor"
                                                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                                        </svg>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="rounded-lg shadow-lg h-full block bg-white">
                            <div className="flex justify-center">
                                <div className="flex justify-center" style={{marginTop: "-75px"}}>
                                    <img src="src/components/Anusha.jpeg"
                                         className="rounded-full mx-auto shadow-lg" alt=""
                                         style= {{width: "150px"}}/>
                                </div>
                            </div>
                            <div className="p-6">
                                <h5 className="text-lg font-bold mb-4">Anusha Ganagsani</h5>
                                <p className="mb-6">SJSU Graduate Student</p>
                                <ul className="list-inside flex mx-auto justify-center">
                                    <a href="https://www.linkedin.com/in/anusha-gangasani/" className="px-2" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                             className="w-4 h-4 text-blue-600">
                                            <path fill="currentColor"
                                                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                                        </svg>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;