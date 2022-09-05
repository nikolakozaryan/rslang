/* eslint-disable no-nested-ternary */
import React from 'react';
import classes from './CardScorePoints.module.scss';
import IScorePoint from './ScoreInterface';

const CardScorePoints: React.FC<IScorePoint> = (props: IScorePoint) => (
    <div
        style={{ backgroundColor: props.done ? (props.correct ? '#58C87E' : '#FF6862') : '#D9D9D9' }}
        className={classes.container}
    >
        {props.done && <img src={`../../../../assets/icons/${props.correct ? 'correct' : 'wrong'}.svg`}></img>}
    </div>
);

export default CardScorePoints;
