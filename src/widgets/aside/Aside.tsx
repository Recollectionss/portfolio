import React from 'react';
import './_aside.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelope, faLocationDot, faPhone, } from "@fortawesome/free-solid-svg-icons";
import {faGithub, } from "@fortawesome/free-brands-svg-icons";
import ContactsItem  from "../../features/contactsItem/ContactsItem.tsx";
import List from "../../shared/list/List.tsx";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons/faXTwitter";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";

const Aside = () => {
    // TODO: need add to project My image and use for img

    const info = [
        {icon: faEnvelope, title: "EMAIL", body: "HeavyObjectics@gmail.com"},
        {icon: faPhone, title: "PHONE", body: "+38(066) 7437717"},
        {icon: faCalendar, title: "BIRTHDAY", body: "15 August, 2005"},
        {icon: faLocationDot, title: "LOCATION", body: "Kiev, Ukraine"},
    ];

    return (
        <aside className='aside'>
            <figure className="aside__figure">
                <img src="" alt="img" className="aside__img"/>
                <figcaption className="aside__figcaption">Ilia Honcharenko</figcaption>
            </figure>
            <div className="aside__job">
                Front-End Developer
            </div>
            <hr className="aside__hr"/>

            <List>
                {
                    info.map(element =>
                    <ContactsItem key={element.title} icon={element.icon} title={element.title} body={element.body}/>)
                }
            </List>

            <div className="aside__social__media">
                <a href="https://github.com/Observersss" className="aside__social__media__link">
                    <FontAwesomeIcon icon={faGithub} size="xl"/>
                </a>
                <a href="https://www.linkedin.com/in/illia-honcharenko-16477826b/"
                   className="aside__social__media__link">
                    <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                </a>
                <a href="https://x.com/Touch78216070" className="aside__social__media__link">
                    <FontAwesomeIcon icon={faXTwitter} size="xl"/>
                </a>
                <a href="https://t.me/dream_bury_me" className="aside__social__media__link">
                    <FontAwesomeIcon icon={faTelegram} size="xl"/>
                </a>
            </div>
        </aside>
    )
        ;
};

export default Aside;