import React from 'react';
import GAME_CARDS_DATA from '../../../common/constants/gameCards';
import Section from '../../../components/Section/Section';
import Card from '../../../components/Card/Card';
import classes from './Games.module.scss';

const Games = () => (
  <Section header="Игры">
    {GAME_CARDS_DATA.map((data) => (
      <Card key={data.title} type="game">
        <div className={classes.img}>
          <img src={data.imgURL} alt="game-image" />
        </div>
        <h3 className={classes.center}>{data.title}</h3>
        <p className={classes.center}>{data.body}</p>
      </Card>
    ))}
  </Section>
);

export default Games;
