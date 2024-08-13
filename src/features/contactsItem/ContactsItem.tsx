import {FC} from 'react';
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import './_contactsItem.scss'
import Icon from "../../shared/icon/Icon.tsx";
export interface ContactsItemProps {
    icon: IconDefinition;
    title:string;
    body:string;
    size?:SizeProp;
}

const ContactsItem: FC<ContactsItemProps>  = (
    {  title,
         body,
        icon,
        size
    }) => {
    return (
        <div className="contactsItem">
            <Icon icon={icon} size={size}/>
            <div className="contactsItem__text">
                <strong className="contactsItem__text__strong">{title}</strong>
                <p className="contactsItem__text__p">{body}</p>
            </div>
        </div>
    );
};

export default ContactsItem;