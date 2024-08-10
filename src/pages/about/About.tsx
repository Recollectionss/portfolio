import React from 'react';
import './_about.scss'
import Navbar from "../../shared/navbar/Navbar.tsx";
const About = () => {
    return (
        <div className="main-container">
            <Navbar/>
            <h1 className="main-container__title">About me</h1>
            <div className="main-container__divider"></div>
            {/*TODO: writing some info about me, what im doing, my social activity ...*/}
            {/*<p>I`m Front-End developer from Kiev, Ukraine working in web development.</p>*/}
            {/*<p>*/}
            {/*    <br/>*/}
            {/*    Study in 3-rd year in Taras Shevchenko National University of Kyiv on specialization 121 Software Engineering*/}
            {/*</p>*/}
        </div>
    );
};

export default About;