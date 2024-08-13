import {FC} from 'react';
import classes from './_myInput.module.scss'

interface MyInputProps{
    text:string;
    value?:string;
    setValue?:() => void;
}

const MyInput: FC<MyInputProps> = ({text,value,setValue}) => {
    return (
        <div className={classes.divInput}>
            <input value={value} onClick={setValue} className={classes.divInput__input}>

            </input>
            <label className={classes.divInput__label}>{text}</label>
        </div>
    );
};

export default MyInput;