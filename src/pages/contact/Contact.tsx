import React from 'react';
import Navbar from "../../shared/navbar/Navbar.tsx";

const Contact = () => {
    return (
        <div className="main-container">
            <Navbar/>
            <h1 className="main-container__name-page">Contact</h1>
            <div className="main-container__divider"></div>
        {/* TODO element: map with info where i`m living, Contact Form (inputs : Full name, email, Message)*/}
        </div>
    );
};

export default Contact;