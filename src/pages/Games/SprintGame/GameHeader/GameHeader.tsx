import React from 'react';
import { Link } from 'react-router-dom';
import classes from './GameHeader.module.scss';
import Logo from '../../../../components/Header/Logo/Logo';

const GameHeader = () => (
  <div className={classes.header}>
    <Link style={{ textDecoration: 'none' }} to="/">
      <Logo />
    </Link>
    <div className={classes.cross}>
      <a href="##">
        <Link to="/games">
          <img src="../../../assets/icons/cross.svg" alt="" />
        </Link>
      </a>
    </div>
  </div>
);

export default GameHeader;
