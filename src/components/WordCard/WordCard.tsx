import React from 'react';
import ICard from './Interaface';
import classes from './WordCard.module.scss';

const WordCard = ({ word, wordTranslate, setWord, color, id }: ICard) => {
  const handler = (event: React.MouseEvent) => {
    const wordCards = document.querySelectorAll('.card__word');
    const target = event.currentTarget as HTMLElement;
    const { style } = target;

    wordCards.forEach((card) => card.removeAttribute('style'));
    setWord(id);
    style.background = color;
  };

  return (
    <div onClick={(e: React.MouseEvent) => handler(e)} className={`card__word ${classes.card}`}>
      <p className={classes.word}>{word}</p>
      <p className={classes.translate}>{wordTranslate}</p>
    </div>
  );
};

export default WordCard;
