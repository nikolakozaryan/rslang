import React, { PropsWithChildren } from 'react';
import classes from './Button.module.scss';

const Button: React.FC<PropsWithChildren> = ({ children }) => <button className={classes.button}>{children}</button>;

export default Button;
