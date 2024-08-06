import React from 'react';
import './_aside.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelope, faLocationDot, faPhone, } from "@fortawesome/free-solid-svg-icons";
import {faGithub, } from "@fortawesome/free-brands-svg-icons";

const Aside = () => {
    return (
        <aside>
            <figure>
                <img src="" alt="img"/>
                <figcaption>Ilia Honcharenko</figcaption>
            </figure>
            <div className="job">
                Front-End Developer
            </div>
            <hr/>

            <div className="container__about">
                <div className="item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} size='xl' />
                    </div>
                    <div className="text">
                        <strong>EMAIL</strong>
                        <p>HeavyObjectics@gmail.com</p>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone} size='xl'/>
                    </div>
                    <div className="text">
                        <strong>PHONE</strong>
                        <p>+38(066) 7437717</p>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faCalendar} size='xl'/>
                    </div>
                    <div className="text">
                        <strong>BIRTHDAY</strong>
                        <p>15 August, 2005</p>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLocationDot} size='xl' />
                    </div>
                    <div className="text">
                        <strong>LOCATION</strong>
                        <p>Kiev, Ukraine</p>
                    </div>
                </div>
            </div>

            <div className="social__media">
                <a href="https://github.com/Observersss">
                    <FontAwesomeIcon icon={faGithub}  size="xl"/>
                </a>
            </div>
        </aside>
    )
        ;
};

export default Aside;