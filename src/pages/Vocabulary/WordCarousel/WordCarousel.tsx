import React, { useEffect, useState } from 'react';
import IProps from './Interfaces';
import WordCard from '../../../components/WordCard/WordCard';
import classes from './WordCarousel.module.scss';
import ArrowButton from '../../../components/ArrowButton/ArrowButton';

const WordCarousel = ({ words, difficultyLevel, setWord, accentColor, page }: IProps) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    setFrame(0);
    (document.querySelector('.inner') as HTMLElement).removeAttribute('style');
  }, [difficultyLevel, page]);

  return (
    <div className={classes.container}>
      <ArrowButton frame={frame} setFrame={setFrame} direction="left" />
      <div className={classes.carousel}>
        <div className={`inner ${classes.inner}`}>
          {words.map((word, index) => (
            <WordCard
              index={index}
              accentColor={accentColor}
              key={word.id}
              wordId={word.id}
              word={word.word}
              wordTranslate={word.wordTranslate}
              setWord={setWord}
            />
          ))}
        </div>
      </div>
      <ArrowButton frame={frame} setFrame={setFrame} direction="right" />
    </div>
  );
};

export default WordCarousel;
