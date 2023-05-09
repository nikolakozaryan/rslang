import { FC } from 'react';
import IGuess from './GuessInterface';
import classes from './CardWordGuessPart.module.scss';

const CardWordGuessPart: FC<IGuess> = (props: IGuess) => (
  <div className={classes.container}>
    <span className={classes.GuessWord}> {props.GuessWord.word}</span>
    <span className={classes.OurGuess}> {props.OurGuess.wordTranslate}</span>
  </div>
);

export default CardWordGuessPart;
