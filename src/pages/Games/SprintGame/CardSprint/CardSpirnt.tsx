import { FC } from 'react';
import classes from './CardSpirnt.module.scss';
import ICardSprint from './CardSprintInterface';
import ScoreGame from '../ScoreGame/ScoreGame';
import CardInGame from './CardInGame/CardInGame';
import CardEndGame from './CardEndGame/CardEndGame';

const CardSpirnt: FC<ICardSprint> = (props: ICardSprint) => (
  <div className={classes.container}>
    {props.game && <ScoreGame score={props.score} />}
    <div className={props.game ? classes.card : classes.cardEnd}>
      {props.game ? (
        <CardInGame
          score={props.score}
          done={props.done}
          correct={props.correct}
          refresh={props.refresh}
          refreshAnswer={props.refreshAnswer}
          ourGuess={props.ourGuess}
          wordGuess={props.wordGuess}
          nextQ={props.nextQ}
        />
      ) : (
        <CardEndGame
          backToGame={props.backToGame}
          game={props.game}
          learned={props.learned}
          mistakes={props.mistakes}
          score={props.score}
          done={props.done}
          correct={props.correct}
          refresh={props.refresh}
          refreshAnswer={props.refreshAnswer}
          ourGuess={props.ourGuess}
          wordGuess={props.wordGuess}
        />
      )}
    </div>
  </div>
);
export default CardSpirnt;
