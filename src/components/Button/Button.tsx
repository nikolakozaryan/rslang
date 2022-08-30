import React from 'react';
import classes from './Button.module.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => (
    <button {...props} className={`${classes.button} ${props.className}`}>
        {props.children}
    </button>
);

export default Button;
