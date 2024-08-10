import React, {FormEvent, FormEventHandler} from 'react';
import classes from './_myForm.module.scss'
import MyInput from "../UI/input/MyInput.tsx";
import MyTextArea from "../UI/textArea/MyTextArea.tsx";
import MyButton from "../UI/button/MyButton.tsx";
const MyForm = () => {
    // TODO: need create use State and use for input and text

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className="form-contactInfo">
                <MyInput/>
                <MyInput/>
            </div>
            <MyTextArea/>
            <MyButton/>
        </form>
    );
};

export default MyForm;