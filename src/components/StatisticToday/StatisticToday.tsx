import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import classes from './StatisticToday.module.scss';
import GameStat from './GameStat/GameStat';
import LearnedWordsAPI from '../API/LearnedWordsAPI/LearnedWordsAPI';
import getUserData from '../../common/getUserData';
import ProgressBar from '../ProgressBar/ProgressBar';
import StatWords from './StatWords/StatWords';
import UserStatistic from '../API/StatisticAPI/StatisticAPI';

const userDate = getUserData();

const StatisticToday = () => {
  const [amountSprint, setAmountSprint] = useState(0);
  const [amountAudio, setAmountAudio] = useState(0);
  const [correctSprint, setCorrectSprint] = useState(0);
  const [correctAudio, setCorrectAudio] = useState(0);
  const [rowSprint, setRowSprint] = useState(0);
  const [rowAudio, setRowAudio] = useState(0);

  if (userDate) {
    const objectWords = async () => {
      const result = await LearnedWordsAPI.getLearnedWords(userDate.id, userDate.token);
      console.log(result, 'result');
      if (result.optional.learnedWordsNumberAudio && result.optional.learnedWordsNumberSprint) {
        setAmountSprint(
          Number(result.optional.learnedWordsNumberSprint[Object.keys(result.optional.learnedWordsNumberSprint)[0]])
        );
        setAmountAudio(
          Number(result.optional.learnedWordsNumberAudio[Object.keys(result.optional.learnedWordsNumberAudio)[0]])
        );
      }
    };
    const objectStat = async () => {
      const result = await UserStatistic.getStatistic(userDate.id, userDate.token);
      setRowAudio(Number(result.optional.audioPointsInARow[Object.keys(result.optional.audioPointsInARow)[0]]));
      setRowSprint(Number(result.optional.sprintPointsInARow[Object.keys(result.optional.sprintPointsInARow)[0]]));
      setCorrectAudio(Number(result.optional.gamesScoreAudio[Object.keys(result.optional.gamesScoreAudio)[0]]));
      setCorrectSprint(Number(result.optional.gamesScoreSprint[Object.keys(result.optional.gamesScoreSprint)[0]]));
    };
    objectWords();
    objectStat();
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Card type={'statisticSmall'}>
          <StatWords amount={amountSprint + amountAudio} />
        </Card>
        <Card type={'statisticMedium'}>
          <ProgressBar progress={Number((((correctSprint + correctAudio) / 2) * 100).toFixed(2))} sprint={true} />
        </Card>
      </div>
      <div className={classes.right}>
        <Card type={'statisticLarge'}>
          <GameStat
            learned={amountSprint}
            correct={Number((correctSprint * 100).toFixed(2))}
            row={rowSprint}
            type="sprint"
          />
        </Card>
        <Card type={'statisticLarge'}>
          <GameStat
            learned={amountAudio}
            correct={Number((correctAudio * 100).toFixed(2))}
            row={rowAudio}
            type="audio"
          />
        </Card>
      </div>
    </div>
  );
};

export default StatisticToday;
