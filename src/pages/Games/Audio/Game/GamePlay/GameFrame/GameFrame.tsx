import React, { useEffect, useState } from 'react';
import IGameFrame from './Interface';
import classes from './GameFrame.module.scss';
import AudioButton from './AudioButton/AudioButton';
import Variants from './Variants/Variants';
import { shuffleArray } from '../../../../../../common/constants/helper';
import Word from '../../../../../../components/API/DictionaryAPI/Word';
import DetailedAudioWord from './DetailedAudioWord/DetailedAudioWord';

const GameFrame = ({
  currentWords,
  correct,
  error,
  streak,
  points,
  setPoints,
  setCorrect,
  setError,
  setStreak,
  setFinished,
}: IGameFrame) => {
  const [remainingWords, setRemainingWords] = useState(currentWords);
  const [currentWord, setCurrentWord] = useState(remainingWords[0]);
  const [variants, setVariants] = useState<Word[]>([]);
  const [isSettled, setIsSettled] = useState(false);

  const getVariants = () => {
    const wrongVariants = shuffleArray(currentWords.filter((variant) => variant.id !== currentWord.id)).slice(0, 4);
    setVariants(shuffleArray([currentWord, ...wrongVariants]));
  };

  useEffect(() => getVariants(), [currentWord]);

  useEffect(() => {
    if (!remainingWords.length) setFinished(true);
    else {
      setCurrentWord(remainingWords[0]);
    }
  }, [remainingWords]);

  return (
    <div className={classes.frame}>
      {isSettled ? <DetailedAudioWord word={currentWord} /> : <AudioButton src={currentWord.audio} />}
      <Variants
        setIsSettled={setIsSettled}
        remainingWords={remainingWords}
        setRemainingWords={setRemainingWords}
        points={points}
        correct={correct}
        error={error}
        streak={streak}
        setPoints={setPoints}
        setCorrect={setCorrect}
        setError={setError}
        setStreak={setStreak}
        variants={variants}
        currentWord={currentWord}
      />
    </div>
  );
};

export default GameFrame;
