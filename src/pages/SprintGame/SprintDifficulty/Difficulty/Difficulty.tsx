import React, { PropsWithChildren } from 'react';
import classes from './Difficulty.module.scss';
import IDifficulty from './DifficultyInterfase';

const Difficulty: React.FC<IDifficulty> = (props: IDifficulty) => (
    <a href="##" className={classes.container}>
        <span className={classes.text}>{props.difficulty}</span>
    </a>
);

export default Difficulty;
