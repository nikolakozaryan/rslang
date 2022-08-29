import React from 'react';
import GameHeader from '../GameHeader/GameHeader';
import SprintDescription from '../SprintDescription/SprintDescription';
import SprintDifficulty from '../SprintDifficulty/SprintDifficulty';
import classes from './StartingPageSprint.module.scss';
import CardSpirnt from '../CardSprint/CardSpirnt';

const StartingPageSprint = () => (
    <div className={classes.background}>
        <GameHeader></GameHeader>
        <SprintDescription />
        <SprintDifficulty />
    </div>
);

export default StartingPageSprint;
