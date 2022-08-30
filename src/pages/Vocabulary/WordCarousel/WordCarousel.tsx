import React, { useEffect, useState } from 'react';
import IProps from './Interfaces';
import WordCard from '../../../components/WordCard/WordCard';
import classes from './WordCarousel.module.scss';
import ArrowButton from '../../../components/ArrowButton/ArrowButton';

const WordCarousel = ({ words, curLevel, setWord, color }: IProps) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    setFrame(0);
    (document.querySelector('.inner') as HTMLElement).removeAttribute('style');
  }, [curLevel]);

  return (
    <div className={classes.container}>
      <ArrowButton frame={frame} setFrame={setFrame} direction="left" />
      <div className={classes.carousel}>
        <div className={`inner ${classes.inner}`}>
          {words.map((word) => (
            <WordCard
              color={color}
              key={word.id}
              id={word.id}
              word={word.word}
              wordTranslate={word.wordTranslate}
              setWord={setWord}
            ></WordCard>
          ))}
        </div>
      </div>
      <ArrowButton frame={frame} setFrame={setFrame} direction="right" />
    </div>
  );
};

export default WordCarousel;
