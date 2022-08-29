import React from 'react';
import IGuess from './GuessInterface';
import classes from './CardWordGuessPart.module.scss';

const CardWordGuessPart: React.FC<IGuess> = (props: IGuess) => (
    <div className={classes.container}>
        <span className={classes.GuessWord}> {props.GuessWord}</span>
        <span className={classes.OurGuess}> {props.OurGuess}</span>
    </div>
);

export default CardWordGuessPart;
