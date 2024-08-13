import React, {FC} from 'react';
import classes from './_myButton.module.scss'

interface MyButtonProps {
    children: React.ReactNode | React.ReactElement;
    onClick?: () => void;
    disabled?: boolean;
}

const MyButton: FC<MyButtonProps> = ({children, onClick,disabled}) => {
    return (
        <button className={classes.myButton} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default MyButton;