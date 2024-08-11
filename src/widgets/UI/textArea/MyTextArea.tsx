import React, {FC, useState} from 'react';
import classes from './_myTextArea.module.scss'
interface MyTextAreaProps extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'placeholder'>{
    text:string;
}

const MyTextArea: FC<MyTextAreaProps> = ({props,text}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    // TODO: need add ...props
    return (
        <div className={classes.divTextArea}>
            <label className={`${classes.divTextArea__label} ${isFocused ? classes.focused : ''}`}>{text}</label>
            <textarea
                className={classes.divTextArea__textArea} {...props}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >

            </textarea>
        </div>
    );
};

export default MyTextArea;