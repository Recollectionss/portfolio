import {FC} from "react";
import classes from "./_sectionContentItem.module.scss";
interface SectionContentItemProps {
    title:string;
    date?:string;
    info?:string;
}
const SectionContentItem : FC<SectionContentItemProps> = ({
    title,
    date,
    info,
}) => {


    return (
        <div className={classes.contentItem}>
            <div className={classes.contentItemPointText}>
                <div className={classes.contentItemPoint}></div>
                <div className={classes.contentItemText}>
                    <h3 className={classes.contentItemText__h3}>{title}</h3>
                    {date && <span className={classes.contentItemText__span}>{date}</span>}
                    {info && <p className={classes.contentItemText__p}>{info}</p>}
                </div>
            </div>
        </div>
    );
};

export default SectionContentItem;