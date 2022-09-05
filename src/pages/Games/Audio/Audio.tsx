import React from 'react';
import classes from './Audio.module.scss';
import Header from './Header/Header';
import Game from './Game/Game';

const Audio = () => (
  <div className={classes.container}>
    <div className={classes.container__content}>
      <Header />
      <Game />
    </div>
  </div>
);

export default Audio;
