import React, {FC} from 'react';
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import './_contactsItem.scss'
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
            <div className="contactsItem__icon">
                <FontAwesomeIcon icon={icon} size={size ? size : 'xl'}/>
            </div>
            <div className="contactsItem__text">
                <strong className="contactsItem__text__strong">{title}</strong>
                <p className="contactsItem__text__p">{body}</p>
            </div>
        </div>
    );
};

export default ContactsItem;