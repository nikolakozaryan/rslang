import React, { useEffect, useState } from 'react';
import Chart, { IChartProps } from '../../components/StatisticsForAllTime/Chart/Chart';
import LearnedWordsAPI from '../API/LearnedWordsAPI/LearnedWordsAPI';
import classes from './StatisticsForAllTime.module.scss';
import ILearnedObject from '../API/LearnedWordsAPI/learnedWordObject';

const StatisticsForAllTime = () => {
  const [newWordActive, setNewWordActive] = useState(true);
  const [userStatisticsPerDay, setUserStatisticsPerDay] = useState<IChartProps['wordCount']>([]);

  async function getLearnedWords(property: 'learnedWordsNumberSprint' | 'learnedWordsNumberAudio') {
    const storageData = localStorage.getItem('user');

    if (storageData) {
      try {
        const { id, token } = JSON.parse(storageData);
        const response: ILearnedObject = await LearnedWordsAPI.getLearnedWords(id, token);

        const attribute = response.optional[property];

        if (attribute) {
          const entries = Object.entries(attribute);

          setUserStatisticsPerDay(
            entries.map(([key, value]) => ({
              x: Number(key),
              y: Number(value),
            }))
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    getLearnedWords('learnedWordsNumberSprint');
  }, []);

  useEffect(() => {
    if (newWordActive) {
      getLearnedWords('learnedWordsNumberSprint');
    } else {
      getLearnedWords('learnedWordsNumberAudio');
    }
  }, [newWordActive]);

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
      <Chart wordCount={userStatisticsPerDay} />
    </>
  );
};

export default StatisticsForAllTime;
