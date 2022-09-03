import React, { useEffect } from 'react';
import IProgress from './Interface';
import classes from './ProgressBar.module.scss';
import Circle from './Circle/Circle';

const ProgressBar = ({ progress }: IProgress) => {
  const setProgress = () => {
    const progressElement = document.querySelector('.progress') as SVGCircleElement;
    const radius = progressElement.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    progressElement.style.strokeDasharray = `${circumference} ${circumference}`;

    ((percentage: number) => {
      const offset = circumference * (1 - percentage / 100);
      progressElement.style.strokeDashoffset = `${offset}`;
    })(100 - progress);
  };

  useEffect(() => {
    setProgress();
  }, []);

  return (
    <svg className={classes.progress} width="206" height="206">
      <Circle color="#AFCDFB" />
      <Circle color="#E7E7E7" isProgress />
      <foreignObject width="206" height="206">
        <div className={classes.content}>
          <p className={classes.percentage}>{progress} %</p>
          <p className={classes.text}>изученных слов</p>
        </div>
      </foreignObject>
    </svg>
  );
};

export default ProgressBar;
