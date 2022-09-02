import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import GameHeader from '../GameHeader/GameHeader';
import SprintDescription from '../SprintDescription/SprintDescription';
import SprintDifficulty from '../SprintDifficulty/SprintDifficulty';
import classes from './StartingPageSprint.module.scss';
import Word from '../../../components/API/DictionaryAPI/Word';
import DictionaryAPI from '../../../components/API/DictionaryAPI/DictionaryAPI';

const StartingPageSprint = (props: { changeGameMode: (array: Word[]) => void }) => {
  const [difficulty, setDifficulty] = useState(0);
  const [words, setWords] = useState<Word[]>([]);

  const [page, setPage] = useState(0);

  async function downloadWords(pg: number, lvl: number) {
    const resp = await DictionaryAPI.getWordsArray(pg, lvl);
    setWords(resp);
  }

  const changeDifficulty = (difficultyLevel: number) => {
    setDifficulty(difficultyLevel);
    console.log(difficulty);
  };

  useEffect(() => {
    setPage(Math.floor(Math.random() * 20));
    console.log(page, difficulty + 1);
    downloadWords(page, difficulty + 1);
    props.changeGameMode(words);
    console.log(words);
  }, [difficulty]);

  return (
    <div className={classes.background}>
      <GameHeader></GameHeader>
      <SprintDescription />
      <SprintDifficulty change={changeDifficulty} />
    </div>
  );
};

export default StartingPageSprint;
