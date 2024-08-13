import React, {FormEvent} from 'react';
import classes from './_myForm.module.scss'
import MyInput from "../UI/input/MyInput.tsx";
import MyTextArea from "../UI/textArea/MyTextArea.tsx";
import MyButton from "../UI/button/MyButton.tsx";
const MyForm = () => {
    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.formContactInfo}>
                <MyInput text={"Full name..."}/>
                <MyInput text={"Email..."}/>
            </div>
            <MyTextArea text={"Message..."} rows={30} />
            <MyButton> Submit </MyButton>
        </form>
    );
};

export default MyForm;