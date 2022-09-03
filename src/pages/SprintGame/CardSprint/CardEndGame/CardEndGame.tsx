import React, { MouseEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './CardEndGame.module.scss';
import Button from '../../../../components/Button/Button';
import ICardInGame from './CardEndGameInterface';
import CardSides from './CardSides/CardSides';
import WordsComponent from './WordsComponent/WordsComponent';
import WordList from './WordList/WordList';
import LinkTodictionary from './LinkToDictionary/LinkTodictionary';
import AudioButton from '../../AudioButton/AudioButton';
import ArrowEndCard from './ArrowEndCard/ArrowEndCard';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';

const CardEndGame = (props: ICardInGame) => {
  const [animation, setAnimation] = useState(true);
  const slide = () => {
    setAnimation(!animation);
  };

  return (
    <div className={[classes.containerEndCard, !animation ? classes.animationRight : classes.animationLeft].join(' ')}>
      <CardSides>
        <div className={classes.result}>Ваш результат {props.score} очков</div>
        <div className={classes.wordsAmount}>
          За прохождение игры вы выучили {props.learned.length} слов
          {(props.learned.length === 1 && 'о') || (props.learned.length <= 4 && props.learned.length > 0 && 'а')}
        </div>
        <div className={classes.Mascot}>
          <ProgressBar progress={(props.learned.length / 20) * 100} sprint={true} />
        </div>
        <ArrowEndCard slide={slide} left={false} />
        <Button>
          <Link to="/games">Продолжить тренировку</Link>
        </Button>
        <LinkTodictionary />
      </CardSides>

      <CardSides>
        <WordsComponent>
          <WordList mistakes={props.mistakes} side="mistakes" learned={props.learned} header="Ошибок" />
          <WordList mistakes={props.mistakes} side="learned" learned={props.learned} header="Знаю" />
        </WordsComponent>
        <ArrowEndCard slide={slide} left={true} />

        <Button>
          <Link to="/games">Продолжить тренировку</Link>
        </Button>
        <LinkTodictionary />
      </CardSides>
    </div>
  );
};

export default CardEndGame;
