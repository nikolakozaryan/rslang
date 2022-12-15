import React from 'react';
import classes from './StatWords.module.scss';

const StatWords = (props: { amount: number }) => (
  <div className={classes.container}>
    <span>{props.amount}</span>
    <p>изученных слов</p>
  </div>
);

export default StatWords;
