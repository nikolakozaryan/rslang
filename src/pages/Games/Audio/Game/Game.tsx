import React, { useEffect, useState } from 'react';
import { randomPage } from '../../../../common/constants/helper';
import Word from '../../../../components/API/DictionaryAPI/Word';
import Description from './Description/Description';
import GamePlay from './GamePlay/GamePlay';
import DictionaryAPI from '../../../../components/API/DictionaryAPI/DictionaryAPI';

const Game = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const [words, setWords] = useState<Word[]>([]);

  const getWords = async (pg: number, lvl: number) => {
    setIsLoading(false);
    const response = await DictionaryAPI.getWordsArray(pg, lvl);
    setWords(response);
    setIsLoading(true);
  };

  useEffect(() => {
    if (isSettled) {
      getWords(randomPage(), difficultyLevel);
    }
  }, [isSettled]);

  return !(isLoading && isSettled) ? (
    <Description setDifficultyLevel={setDifficultyLevel} setIsSettled={setIsSettled} />
  ) : (
    <GamePlay words={words} />
  );
};

export default Game;
