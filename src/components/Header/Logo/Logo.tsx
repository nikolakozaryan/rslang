import React from 'react';
import classes from './Logo.module.scss';

const Logo = () => (
    <div className={classes.logo}>
        <img src="../../assets/icons/logo.svg" alt="logo" />
        <h5>RSLang</h5>
    </div>
);

export default Logo;
