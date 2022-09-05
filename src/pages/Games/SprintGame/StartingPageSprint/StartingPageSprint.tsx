import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import GameHeader from '../GameHeader/GameHeader';
import SprintDescription from '../SprintDescription/SprintDescription';
import SprintDifficulty from '../SprintDifficulty/SprintDifficulty';
import classes from './StartingPageSprint.module.scss';
import Word from '../../../../components/API/DictionaryAPI/Word';
import DictionaryAPI from '../../../../components/API/DictionaryAPI/DictionaryAPI';

const StartingPageSprint = (props: { changeGameMode: (array: Word[]) => void }) => {
  const [difficulty, setDifficulty] = useState(0);

  const [page, setPage] = useState(0);

  const changeDifficulty = (difficultyLevel: number) => {
    setDifficulty(difficultyLevel);
  };

  useEffect(() => {
    const changeDif = async () => {
      setPage(Math.floor(Math.random() * 20));
      const resp = await DictionaryAPI.getWordsArray(page, difficulty + 1);
      props.changeGameMode(resp);
    };
    changeDif();
  }, [difficulty]);

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <GameHeader></GameHeader>
        <SprintDescription />
        <SprintDifficulty change={changeDifficulty} />
      </div>
    </div>
  );
};

export default StartingPageSprint;
