import React, {FC} from 'react';
import classes from './_myInput.module.scss'

interface MyInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'>{
    text:string;
}

const MyInput: FC<MyInputProps> = ({props,text}) => {
    // TODO: need add ...props
    return (
        <div className={classes.divInput}>
            <input {...props} className={classes.divInput__input}>

            </input>
            <label className={classes.divInput__label}>{text}</label>
        </div>
    );
};

export default MyInput;