import React from 'react';
import CardScorePoints from '../CardScorePoints/CardScorePoints';
import CardWordGuessPart from '../CardWordGuessPart/CardWordGuessPart';
import CardButton from '../CardButton/CardButton';
import ICardSprint from '../CardSprintInterface';
import ScoreGame from '../../ScoreGame/ScoreGame';
import CounterGame from '../../CounterGame/CounterGame';
import classes from './CardInGame.module.scss';
import ICardInGame from './CardInGameInterface';
import AudioButton from '../../AudioButton/AudioButton';

const CardInGame = (props: ICardInGame) => (
  <div>
    <div className={classes.CardUpperPart}>
      <CardScorePoints done={props.done[0][0]} correct={props.correct[0][1]} />
      <CardScorePoints done={props.done[1][0]} correct={props.correct[1][1]} />
      <CardScorePoints done={props.done[2][0]} correct={props.correct[2][1]} />
      <AudioButton audio={props.wordGuess.audio} word={props.wordGuess.word} nextQ={props.nextQ} />
    </div>
    <CardWordGuessPart OurGuess={props.ourGuess} GuessWord={props.wordGuess} />
    <div className={classes.controls}>
      <div className={classes.cotrolsContainer}>
        <CardButton correct={true} refresh={props.refresh} refreshAnswer={props.refreshAnswer} />
        <CardButton correct={false} refresh={props.refresh} refreshAnswer={props.refreshAnswer} />
      </div>
      <div className={classes.arrows}>
        <div className={classes.cotrolsContainer__arrow}>
          <a href="##">
            {' '}
            <img src="../../../assets/icons/ArrowLeftCard.svg" alt="" />
          </a>
        </div>
        <div className={classes.cotrolsContainer__arrow}>
          <a href="##">
            {' '}
            <img src="../../../assets/icons/arrowRightCard.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CardInGame;
