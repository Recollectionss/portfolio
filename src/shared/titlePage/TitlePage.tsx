import classes from "./_titlePage.module.scss";
import {FC} from "react";

interface NamePageAndDividerProps {
    title:string;
}

const TitlePage: FC<NamePageAndDividerProps> = ({title}) => {
    return (
        <div className={classes.container}>
            <h1 className={classes.container__title}>{title}</h1>
            <div className={classes.container__divider}></div>
        </div>
    );
};

export default TitlePage;