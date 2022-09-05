import React, { useEffect, useRef, useState } from 'react';
import Chart, { IChartProps } from '../../components/StatisticsForAllTime/Chart/Chart';
import LearnedWordsAPI from '../API/LearnedWordsAPI/LearnedWordsAPI';
import classes from './StatisticsForAllTime.module.scss';
import ILearnedObject from '../API/LearnedWordsAPI/learnedWordObject';

const StatisticsForAllTime = () => {
  //   const controller = new AbortController();

  const [newWordActive, setNewWordActive] = useState(true);
  const [userStatisticsPerDay, setUserStatisticsPerDay] = useState<IChartProps['wordCount']>([]);

  const controllerRef = useRef<AbortController>();

  async function getLearnedWords(property: 'learnedWordsNumberSprint' | 'learnedWordsNumberAudio') {
    const storageData = localStorage.getItem('user');

    if (storageData) {
      try {
        const { id, token } = JSON.parse(storageData);
        if (controllerRef.current) {
          controllerRef.current.abort();
        }
        const controller = new AbortController();
        controllerRef.current = controller;
        const response: ILearnedObject = await LearnedWordsAPI.getLearnedWords(id, token, controller.signal);

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
            onClick={() => {
              //   controller.abort();
              setNewWordActive(true);
            }}
          >
            Количество новых слов
          </button>
        </li>
        <li className={classes.item}>
          <button
            className={newWordActive ? classes.button : classes.buttonActive}
            onClick={() => {
              //   controller.abort();
              setNewWordActive(false);
            }}
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
