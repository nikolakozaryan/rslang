import React from 'react';
import DIFFICULTY from '../../../common/constants/difficultyConst';
import Difficulty from './Difficulty/Difficulty';
import classes from './SprintDifficulty.module.scss';
import Button from '../../../components/Button/Button';

const SprintDifficulty = () => (
    <div className={classes.section}>
        <h3 className={classes.header}>Выберите уровень:</h3>
        <div className={classes.container}>
            {DIFFICULTY.map((item) => (
                <Difficulty difficulty={item} />
            ))}
        </div>
        <Button>Начать</Button>
    </div>
);

export default SprintDifficulty;
