import React, { useState } from 'react';
import { shuffleArray } from '../../../../../common/constants/helper';
import Word from '../../../../../components/API/DictionaryAPI/Word';
import GameFrame from './GameFrame/GameFrame';
import Result from './Result/Result';

interface IWords {
  words: Word[];
}

const GamePlay = ({ words }: IWords) => {
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [finished, setFinished] = useState(false);
  const [correct, setCorrect] = useState<Word[]>([]);
  const [error, setError] = useState<Word[]>([]);

  return !finished ? (
    <GameFrame
      currentWords={shuffleArray(words)}
      streak={streak}
      points={points}
      correct={correct}
      error={error}
      setPoints={setPoints}
      setStreak={setStreak}
      setFinished={setFinished}
      setCorrect={setCorrect}
      setError={setError}
    />
  ) : (
    <Result points={points} correct={correct} error={error} />
  );
};

export default GamePlay;
