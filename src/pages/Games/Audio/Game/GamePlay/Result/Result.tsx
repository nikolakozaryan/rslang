import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../../../components/Button/Button';
import IResult from './Interface';
import classes from './Result.module.scss';
import Slider from './Slider/Slider';

const Result = ({ correct, error, points }: IResult) => (
  <div className={classes.container}>
    <div className={classes.content}>
      <Slider correct={correct} error={error} points={points} />
      <Link to={'/games'}>
        <Button>Продолжить тренировку</Button>
      </Link>
      <Link className={classes.vocabulary} to={'/vocabulary'}>
        К учебнику
      </Link>
    </div>
  </div>
);

export default Result;
