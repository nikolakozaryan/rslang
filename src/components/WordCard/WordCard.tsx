import React from 'react';
import ICard from './Interaface';
import classes from './WordCard.module.scss';

const WordCard = ({ word, wordId, wordTranslate, accentColor, setWord, index }: ICard) => {
  const addColor = (event: React.MouseEvent) => {
    const wordCards = document.querySelectorAll('.card__word');
    const target = event.currentTarget as HTMLElement;
    const { style } = target;

    wordCards.forEach((card) => card.removeAttribute('style'));
    setWord(wordId);
    style.background = accentColor;
  };

  return (
    <div
      style={index ? {} : { background: accentColor }}
      onClick={(e: React.MouseEvent) => addColor(e)}
      className={`card__word ${classes.card}`}
    >
      <p className={classes.word}>{word}</p>
      <p className={classes.translate}>{wordTranslate}</p>
    </div>
  );
};

export default WordCard;
