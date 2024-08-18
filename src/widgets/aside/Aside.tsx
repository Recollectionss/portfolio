import './_aside.scss'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faXTwitter} from "@fortawesome/free-brands-svg-icons/faXTwitter";
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faCalendar} from "@fortawesome/free-solid-svg-icons/faCalendar";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import ContactsItem  from "../../features/contactsItem/ContactsItem.tsx";
import SocialLink from "../../shared/link/SocialLink.tsx";
import {ContactInfo, ContactLink} from "../../shared/types/contact.ts";
import List from "../../shared/list/List.tsx";
import Me from '/Me.png'
const Aside = () => {
    const info: ContactInfo[] = [
        {icon: faEnvelope, title: "EMAIL", body: "HeavyObjectics@gmail.com"},
        {icon: faPhone, title: "PHONE", body: "+38(066) 743 77 17"},
        {icon: faCalendar, title: "BIRTHDAY", body: "15 August, 2005"},
        {icon: faLocationDot, title: "LOCATION", body: "Kiev, Ukraine"},
    ];

    const links:ContactLink[] = [
        {href: "https://github.com", icon: faGithub},
        {href: "www.linkedin.com/in/illia-honcharenko-16477826b", icon: faLinkedin},
        {href: "https://x.com/Touch78216070", icon: faXTwitter},
        {href: "https://t.me/dream_bury_me", icon: faTelegram}
    ];

    return (
        <aside className='aside'>
            <figure className="aside__figure">
                <img src={Me} alt="img" className="aside__img"/>
                <figcaption className="aside__figcaption">Ilia Honcharenko</figcaption>
            </figure>
            <div className="aside__job">
                Front-End Developer
            </div>
            <hr className="aside__hr"/>

            <List vertical={true}>
                {
                    info.map(element =>
                    <ContactsItem key={element.title} icon={element.icon} title={element.title} body={element.body}/>)
                }
            </List>

            <List>
                {links.map(link =>
                    <SocialLink key={link.href} href={link.href} icon={link.icon} />
                )}
            </List>
        </aside>
    )
        ;
};

export default Aside;