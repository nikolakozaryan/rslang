import React from 'react';
import { Link } from 'react-router-dom';
import { DIFFICULTY } from '../../../common/constants/difficultyLevels';
import Difficulty from './Difficulty/Difficulty';
import classes from './SprintDifficulty.module.scss';
import Button from '../../../components/Button/Button';

const SprintDifficulty = (props: { change: (difficultyLevel: number) => void }) => (
  <div className={classes.section}>
    <h3 className={classes.header}>Выберите уровень:</h3>
    <div className={classes.container}>
      {DIFFICULTY.map((item) => (
        <Difficulty difficulty={item.level} change={props.change} id={item.id} />
      ))}
    </div>

    <Button>
      <Link to="/sprintGame">Начать</Link>
    </Button>
  </div>
);

export default SprintDifficulty;
