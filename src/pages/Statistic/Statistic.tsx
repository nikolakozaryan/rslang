import React from 'react';
import StatisticsForAllTime from '../../components/StatisticsForAllTime/StatisticsForAllTime';
import classes from './Statistics.module.scss';

const Statistic = () => (
  <div className={classes.main}>
    <StatisticsForAllTime />
  </div>
);

export default Statistic;
