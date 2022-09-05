import React from 'react';
import StatisticsForAllTime from '../../components/StatisticsForAllTime/StatisticsForAllTime';
import StatisticToday from '../../components/StatisticToday/StatisticToday';

const Statistic = () => (
  <>
    <StatisticToday />
    <StatisticsForAllTime />
  </>
);
export default Statistic;
