import React from 'react';
import classes from './Card.module.scss';
import ICard from './CardInterface';

let className;

const Card: React.FC<ICard> = (props) => {
  switch (props.type) {
    case 'team': {
      className = `${classes.card} ${classes.cardTeam}`;
      break;
    }
    case 'opportunity': {
      className = `${classes.card} ${classes.cardOpportunity}`;
      break;
    }
    default: {
      className = `${classes.card} ${classes.cardGames}`;
      break;
    }
  }
  return <div className={className}>{props.children}</div>;
};
export default Card;
