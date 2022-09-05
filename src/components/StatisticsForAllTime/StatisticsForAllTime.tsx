import React, { useState } from 'react';
import Chart from '../../components/StatisticsForAllTime/Chart/Chart';
import classes from './StatisticsForAllTime.module.scss';

const StatisticsForAllTime = () => {
  const [newWordActive, setNewWordActive] = useState(true);

  const wordCount = [
    { x: '2022-09-04', y: 7 },
    { x: '2022-09-05', y: 10 },
    { x: '2022-09-06', y: 2 },
    { x: '2022-09-07', y: 14 },
    { x: '2022-09-08', y: 26 },
    { x: '2022-09-09', y: 15 },
    { x: '2022-09-10', y: 4 },
    { x: '2022-09-11', y: 11 },
  ];

  const wordCount2 = [
    { x: '2022-11-04', y: 7 },
    { x: '2022-11-05', y: 10 },
    { x: '2022-11-06', y: 2 },
    { x: '2022-11-07', y: 14 },
    { x: '2022-11-08', y: 26 },
    { x: '2022-11-09', y: 15 },
    { x: '2022-11-10', y: 4 },
    { x: '2022-11-11', y: 11 },
  ];

  return (
    <>
      <h5 className={classes.header}>Статистика за все время</h5>
      <ul className={classes.navList}>
        <li className={classes.item}>
          <button
            className={newWordActive ? classes.buttonActive : classes.button}
            onClick={() => setNewWordActive(true)}
          >
            Количество новых слов
          </button>
        </li>
        <li className={classes.item}>
          <button
            className={newWordActive ? classes.button : classes.buttonActive}
            onClick={() => setNewWordActive(false)}
          >
            Количество изученных слов
          </button>
        </li>
      </ul>
      {newWordActive ? <Chart wordCount={wordCount} /> : <Chart wordCount={wordCount2} />}
    </>
  );
};

export default StatisticsForAllTime;
