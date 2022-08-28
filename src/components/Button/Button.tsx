import React, { PropsWithChildren } from 'react';
import classes from './Button.module.scss';

type IntrinsicAttributes = {
    disabled?: boolean;
    style?: {
        [index: string]: string;
    };
    onClick?: () => void;
};

const Button: React.FC<IntrinsicAttributes & PropsWithChildren> = (props) => (
    <button {...props} className={classes.button}>
        {props.children}
    </button>
);

export default Button;
