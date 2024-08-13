import {FC, useState} from 'react';
import classes from './_myTextArea.module.scss'
interface MyTextAreaProps{
    text:string;
}

const MyTextArea: FC<MyTextAreaProps> = ({text}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
        <div className={classes.divTextArea}>
            <label className={`${classes.divTextArea__label} ${isFocused ? classes.focused : ''}`}>{text}</label>
            <textarea
                className={classes.divTextArea__textArea}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >

            </textarea>
        </div>
    );
};

export default MyTextArea;