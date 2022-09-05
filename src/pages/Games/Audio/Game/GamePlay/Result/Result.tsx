import React from 'react';
import { Link } from 'react-router-dom';
import getUserData from '../../../../../../common/getUserData';
import LearnedWordsAPI from '../../../../../../components/API/LearnedWordsAPI/LearnedWordsAPI';
import Data from '../../../../../../components/API/StatisticAPI/IData';
import Button from '../../../../../../components/Button/Button';
import IResult from './Interface';
import classes from './Result.module.scss';
import Slider from './Slider/Slider';

const Result = ({ correct, error, points, streak, setAmount, setCorrect, setPoints }: IResult) => {
  const userData = getUserData();
  if (userData) {
    const sign = async () => {
      const { id } = userData;
      const { token } = userData;
      setPoints(streak);
      setAmount(1);
      setCorrect(Number((correct.length / 20).toFixed(2)));
      const resp = async () => {
        let count = 0;
        const data = await LearnedWordsAPI.getLearnedWords(id, token);
        const server = data.optional.learnedWords.split(' ');
        const servercountsprint = data.optional.learnedWordsNumberSprint as Data;
        const servercountaudio = data.optional.learnedWordsNumberAudio as Data;

        const countnew = servercountsprint[Object.keys(servercountsprint)[0]] as number;
        const countnewaudio = servercountaudio[Object.keys(servercountaudio)[0]] as number;
        correct.map((item) => {
          if (!server.includes(item.word)) {
            server.push(item.word);
            count += 1;
          }
          return item;
        });
        const date = new Date().setHours(0, 0, 0);
        const WordNumberSprint = { [date]: countnew };
        const WordNumberAudio = { [date]: count + countnewaudio };
        const newLearnWords = async () => {
          const lw = LearnedWordsAPI.createWord(id, token, 1, server, WordNumberSprint, WordNumberAudio);
          await LearnedWordsAPI.updateUserLearnedWords(lw);
        };
        newLearnWords();
      };
      resp();
    };
    sign();
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Slider correct={correct} error={error} points={points} />
        <Link to={'/games'}>
          <Button>Продолжить тренировку</Button>
        </Link>
        <Link className={classes.vocabulary} to={'/vocabulary'}>
          К учебнику
        </Link>
      </div>
    </div>
  );
};

export default Result;
