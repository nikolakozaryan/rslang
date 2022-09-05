import React, { useEffect, useState } from 'react';
import { randomPage } from '../../../../common/constants/helper';
import Word from '../../../../components/API/DictionaryAPI/Word';
import Description from './Description/Description';
import GamePlay from './GamePlay/GamePlay';
import DictionaryAPI from '../../../../components/API/DictionaryAPI/DictionaryAPI';
import IAudio from '../Interface';

const Game = ({ setPoints, setAmount, setCorrect }: IAudio) => {
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
    <GamePlay words={words} setPoints={setPoints} setAmount={setAmount} setCorrect={setCorrect} />
  );
};

export default Game;
