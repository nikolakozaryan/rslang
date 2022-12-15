import React from 'react';
import ProgressBar from '../../../../../../../../components/ProgressBar/ProgressBar';
import IStatistics from './Interface';
import classes from './Statistics.module.scss';

const Statistics = ({ percentage, correctAmount, points }: IStatistics) => {
  const handler = () => {
    const { style } = document.querySelector('.inner') as HTMLDivElement;
    style.transform = 'translate(-50%)';
  };

  return (
    <div className={classes.container}>
      <div onClick={handler} className={`arrow ${classes.arrow}`} />
      <h2 className={classes.header}>Ваш результат {points} очков</h2>
      <p className={classes.paragraph}>
        За прохождение игры вы выучили <span className={classes.amount}>{correctAmount} слов</span>
      </p>
      <ProgressBar progress={percentage} />
    </div>
  );
};

export default Statistics;
