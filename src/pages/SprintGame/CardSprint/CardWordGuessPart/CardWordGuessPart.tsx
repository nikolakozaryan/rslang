import React from 'react';
import IGuess from './GuessInterface';
import classes from './CardWordGuessPart.module.scss';

const CardWordGuessPart: React.FC<IGuess> = (props: IGuess) => (
    <div className={classes.container}>
        <span className={classes.GuessWord}> {props.GuessWord.word}</span>
        <span className={classes.OurGuess}> {props.OurGuess.word}</span>
    </div>
);

export default CardWordGuessPart;
