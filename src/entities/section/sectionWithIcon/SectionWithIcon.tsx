import React, {FC} from 'react';
import './_sectionWithIcon.scss'
import Icon from "../../../shared/icon/Icon.tsx";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

export interface SectionItem{
    title:string;
    dates?:string;
    info?:string;
}
interface SectionWithIconProps{
    icon: IconDefinition;
    sectionTitle:string;
    items:[SectionItem:object];
}
const SectionWithIcon : FC<SectionWithIconProps> = ({icon,sectionTitle,items =[]}) => {
    return (
        <section className="section">
            <div className="section__icon-divider">
                <Icon icon={icon}/>
                <div className="section__icon-divider-line"></div>
            </div>
            <div className="section__content">
                <h2 className="section__content-title">{sectionTitle}</h2>
                <div className="section__content-items">
                    {items.map(item =>
                        <div className="section__content-item" key={item.dates}>
                            <div className="section__content-item-point-text">
                                <div className="section__content-item-point"></div>
                                <div className="section__content-item-text">
                                    <h3>{item.title}</h3>
                                    {item.dates && <span>{item.dates}</span>}
                                    {item.info && <p>{item.info}</p>}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SectionWithIcon;