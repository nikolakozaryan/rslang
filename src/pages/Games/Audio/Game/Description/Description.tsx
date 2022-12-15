import React from 'react';
import classes from './Description.module.scss';
import Difficulty from './Difficulty/Difficulty';
import Button from '../../../../../components/Button/Button';

interface IDescriptionProps {
  setDifficultyLevel: React.Dispatch<React.SetStateAction<number>>;
  setIsSettled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Description = ({ setDifficultyLevel, setIsSettled }: IDescriptionProps) => (
  <div className={classes.container}>
    <div>
      <h2 className={classes.heading}>Аудиовызов</h2>
      <p className={classes.paragraph}>Выберите один верный перевод услышанного слова из пяти.</p>
      <p className={classes.paragraph}>
        Управлять игрой можно как мышкой, так и клавишами 1, 2, 3, 4, 5, &#8592; &#8594; на клавиатуре.
      </p>
    </div>
    <Difficulty setDifficultyLevel={setDifficultyLevel} />
    <div className="start" onClick={() => setIsSettled(true)}>
      <Button>
        <p className={classes.button}>Начать</p>
      </Button>
    </div>
  </div>
);

export default Description;
