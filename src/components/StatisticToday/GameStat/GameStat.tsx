import React from 'react';
import IGameStat from './interface';
import classes from './GameStat.module.scss';

const GameStat = (props: IGameStat) => (
  <div className={classes.container}>
    <div className={classes.text}>
      <h2 className={classes.header}>{props.type === 'audio' ? 'Аудиовызов' : 'Спринт'}</h2>
      <div className={classes.description}>
        <p>Изучено слов: {props.learned}</p>
        <p>Правильных ответов: {props.correct} %</p>
        <p>Самая длинная серия правильных ответов: {props.row}</p>
      </div>
    </div>
    <img src={`../../../assets/icons/${props.type === 'audio' ? 'StatAudio' : 'StatSprint'}.svg`} alt="" />
  </div>
);

export default GameStat;
