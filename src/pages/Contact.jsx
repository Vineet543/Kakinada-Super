import React from 'react';

import "./pages.css";
import "../components/components.css"
import { Navbar, Footer } from "../components";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='contact_container'>
                <div>
                    <h1 className='contact'>Contact Us</h1>
                </div>
                <h4>Call us to learn more</h4>
                <div className='contact_content'>
                    <p className='paragraph'>Kakinada Circle</p>

                    Ms Shrilakshmi Acharya <br />
                    +91 99450 77575
                    <p className='paragraph'> Operations Team</p>

                    Mr Ashwin Pai<br />
                    +91 99459 62828
                    <p className='paragraph'>Delivery Team</p>

                    Mr Adithya Bhat
                    +91 99459 32828

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact