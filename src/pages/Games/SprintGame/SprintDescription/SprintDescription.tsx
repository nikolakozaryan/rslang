import React from 'react';
import classes from './SprintDescription.module.scss';

const SprintDescription = () => (
  <div className={classes.description}>
    <h3 className={classes.header}>Спринт</h3>
    <p className={classes.text}>
      Попробуй угадать как можно больше слов за 30 секунд. <br /> Управлять игрой можно как мышкой, так и клавишами на
      клавиатуре.
    </p>
  </div>
);

export default SprintDescription;
