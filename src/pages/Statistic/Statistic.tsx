import React from 'react';
import StatisticsForAllTime from '../../components/StatisticsForAllTime/StatisticsForAllTime';
import StatisticToday from '../../components/StatisticToday/StatisticToday';
import classes from './Statistics.module.scss';

const Statistic = () => (
  <div className={classes.main}>
    <StatisticToday />
    <StatisticsForAllTime />
  </div>
);

export default Statistic;
