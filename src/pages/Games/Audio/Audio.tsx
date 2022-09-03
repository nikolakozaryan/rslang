import React from 'react';
import classes from './Audio.module.scss';
import Header from './Header/Header';

const Audio = () => (
  <div className={classes.container}>
    <div className={classes.container__content}>
      <Header />
    </div>
  </div>
);

export default Audio;
