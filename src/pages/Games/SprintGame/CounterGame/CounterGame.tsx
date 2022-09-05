import React from 'react';
import classes from './CounterGame.module.scss';

const CounterGame = (props: { counter: number }) => (
  <div className={classes.container}>
    <img src="../../../assets/icons/timer.svg" alt="timer" />
    {props.counter}
  </div>
);

export default CounterGame;
