import React, { PropsWithChildren } from 'react';
import classes from './Difficulty.module.scss';
import IDifficulty from './DifficultyInterfase';

const Difficulty: React.FC<IDifficulty> = (props: IDifficulty) => {
  const changeDif = () => {
    console.log('here', props.difficulty);
    props.change(Number(props.id));
  };
  return (
    <a href="##" onClick={changeDif} className={classes.container} id={props.id.toString()}>
      <span className={classes.text}>{props.difficulty}</span>
    </a>
  );
};

export default Difficulty;
