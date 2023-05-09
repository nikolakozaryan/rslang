import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import Logo from '../../../../components/Header/Logo/Logo';
import ToGames from './ToGames/ToGames';

const Header = () => (
  <div className={classes.header}>
    <Logo />
    <Link to={'/games'}>
      <ToGames />
    </Link>
  </div>
);

export default Header;
