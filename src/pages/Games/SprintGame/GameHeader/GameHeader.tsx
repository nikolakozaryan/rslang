import React from 'react';
import { Link } from 'react-router-dom';
import classes from './GameHeader.module.scss';
import Logo from '../../../../components/Header/Logo/Logo';

const GameHeader = () => (
  <div className={classes.header}>
    <Logo />
    <div className={classes.cross}>
      <Link to="/games">
        <img src="../../../assets/icons/cross.svg" alt="" />
      </Link>
    </div>
  </div>
);

export default GameHeader;
