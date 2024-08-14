import classes from './_websiteItem.module.scss'
import {FC} from "react";

export interface WebsiteItemProps {
    img: string;
    title:string;
    href:string;
}

const WebsiteItem: FC<WebsiteItemProps> = ({img,title,href}) => {
    return (
        <figure className={classes.item}>
            <a href={href} className={classes.item__a}>
                <img src={img} alt="image" className={classes.item__img}/>
                <figcaption className={classes.item__figcaption}>{title}</figcaption>
            </a>
        </figure>
    );
};

export default WebsiteItem;