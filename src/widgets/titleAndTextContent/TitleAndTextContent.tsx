import classes from './_titleAndTextContent.module.scss'
import {FC} from "react";

export interface Info {
    title?:string;
    text?:string;
}

interface TitleAndTextContentProps {
    content:Info[];
}
const TitleAndTextContent:FC<TitleAndTextContentProps> = ({content}) => {
    return (
        <div className={classes.container}>
            {content.map((element,index) =>
                <div key={index}>
                    {element.title && <h3 className={classes.container__title}>{element.title}</h3>}
                    {element.text && <p className={classes.container__text}>{element.text}</p>}
                </div>
            )}
        </div>
    );
};

export default TitleAndTextContent;