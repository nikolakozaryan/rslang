import React from 'react';
import classes from './GameHeader.module.scss';
import Logo from '../../../components/Header/Logo/Logo';

const GameHeader = () => (
    <div className={classes.header}>
        <Logo />
        <div className={classes.cross}>
            <a href="##">
                <img src="../../../assets/icons/cross.svg" alt="" />
            </a>
        </div>
    </div>
);

export default GameHeader;
