import React from 'react';
import classes from './Audio.module.scss';
import Header from './Header/Header';
import Game from './Game/Game';
import IAudio from './Interface';

const Audio = ({ setPoints, setAmount, setCorrect }: IAudio) => (
  <div className={classes.container}>
    <div className={classes.container__content}>
      <Header />
      <Game setPoints={setPoints} setAmount={setAmount} setCorrect={setCorrect} />
    </div>
  </div>
);

export default Audio;
