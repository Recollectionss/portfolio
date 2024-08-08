import React from 'react';
import './_resume.scss'
import Navbar from "../../shared/navbar/Navbar.tsx";
import Icon from "../../shared/icon/Icon.tsx";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons/faBookOpen";
const Resume = () => {
    return (
        <div className="main-container">
            <Navbar/>
            <h1 className="main-container__title">Resume</h1>
            <div className="main-container__divider"></div>

            <section className="main-container__section">
                <div className="main-container__icon-divider">
                    <Icon icon={faBookOpen}/>
                    <div className="main-container__icon-divider__line"></div>
                </div>

                {/*TODO:create new component about education and used for experience*/}
                <div className="main-container__content">
                    <h2 className="main-container__content-title">Education</h2>
                    <div className="main-container__content-items">
                        <div className="main-container__content-item">
                            <div className="main-container__content-item__point-text">
                                <div className="main-container__content-item__point"></div>
                                <div className="main-container__content-item__text">
                                    <h3>Tarasa Shevchenka National University of Kiev</h3>
                                    <span>2022 - Now</span>
                                    <p>121 specialization - Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*TODO: need add section about My skills*/}
        </div>
    );
};

export default Resume;