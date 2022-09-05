import React from 'react';
import classes from './ScoreGame.module.scss';

const ScoreGame = (props: { score: number }) => <div className={classes.container}>{props.score}</div>;

export default ScoreGame;
