import React from 'react';
import {ButtonProps} from "./interface";
import './style.css';

const Button: React.FC<ButtonProps> = ({type="default",children}) => {
    const classeName = type;
    return (
        <button className={classeName}>{children}</button>
    );
};

export default Button;