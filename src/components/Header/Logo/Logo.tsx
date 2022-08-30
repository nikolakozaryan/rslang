import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.module.scss';

const Logo = () => (
    <Link to="/" className={classes.logo}>
        <img src="../../assets/icons/logo.svg" alt="logo" />
        <h5>RSLang</h5>
    </Link>
);

export default Logo;
