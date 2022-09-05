import React from 'react';
import ISlider from './Interface';
import Statistics from './Statistics/Statistics';
import WordsSummary from './WordsSummary/WordsSummary';
import classes from './Slider.module.scss';

const Slider = ({ error, correct, points }: ISlider) => {
  const correctAmount = correct.length;
  const errorAmount = error.length;
  const percentage = Math.round((correctAmount / (correctAmount + errorAmount)) * 100);

  return (
    <div className={classes.slider__container}>
      <div className={`inner ${classes.inner}`}>
        <Statistics percentage={percentage} correctAmount={correctAmount} points={points} />
        <WordsSummary error={error} correct={correct} />
      </div>
    </div>
  );
};

export default Slider;
