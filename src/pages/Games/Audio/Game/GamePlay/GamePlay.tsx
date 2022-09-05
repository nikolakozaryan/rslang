import React, { useEffect, useState } from 'react';
import { shuffleArray } from '../../../../../common/constants/helper';
import Word from '../../../../../components/API/DictionaryAPI/Word';
import IAudio from '../../Interface';
import GameFrame from './GameFrame/GameFrame';
import Result from './Result/Result';

interface IWords extends IAudio {
  words: Word[];
}

const GamePlay = ({ setPoints, setAmount, setCorrect, words }: IWords) => {
  const [points, setPoint] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [streak, setStreak] = useState(0);
  const [finished, setFinished] = useState(false);
  const [corrects, setCorrects] = useState<Word[]>([]);
  const [error, setError] = useState<Word[]>([]);

  useEffect(() => {
    if (streak > maxStreak) setMaxStreak(streak);
  }, [streak]);

  return !finished ? (
    <GameFrame
      currentWords={shuffleArray(words)}
      streak={streak}
      points={points}
      correct={corrects}
      error={error}
      setPoints={setPoint}
      setStreak={setStreak}
      setFinished={setFinished}
      setCorrect={setCorrects}
      setError={setError}
    />
  ) : (
    <Result
      points={points}
      setPoints={setPoints}
      setAmount={setAmount}
      setCorrect={setCorrect}
      streak={maxStreak}
      correct={corrects}
      error={error}
    />
  );
};

export default GamePlay;
