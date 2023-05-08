import React from 'react';
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef();
    const [msg, setMsg] = useState("");
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dy5w4ci', 'template_7g96a5d', form.current, 'a6rG46J2dNna_z0NJ')
      setMsg("Thank you! We will get back to you soon :)")
      e.target.reset()
    };

    return (
        <div class="flex justify-center items-center h-screen">
        <div className="container1 my-5 px-10 mx-auto">
            <section className="mb-40 text-grey-800 bg-white p-10 rounded-md flex flex-col">
                <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <h2 className="text-black text-3xl font-bold mb-6">Contact us</h2>
                        <p className="text-black mb-6">
                            Got questions or feedback about our chatbot? Contact us anytime:
                        </p>
                        <p className="text-black mb-2">San Jose, 95192, United States</p>
                        <p className="text-black mb-2">ashika.anandbabu@sjsu.edu</p>
                        <p className="text-black mb-2">ramya.mahesh@sjsu.edu</p>
                        <p className="text-black mb-2">anusha.gangasani@sjsu.edu</p>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group mb-6">
                                <input type="text" name = "name" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                       placeholder="Name" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="email"  name="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                       placeholder="Email address"/>
                            </div>
                            <div className="form-group mb-6">
            <textarea name="message" className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send
                            </button> <span>{msg}</span>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
}

export default Contact;