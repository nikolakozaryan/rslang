import React, { useEffect, useState } from 'react';
import classes from './Difficulty.module.scss';
import DifficultyCard from './DifficultyCard/DifficultyCard';
import { DIFFICULTY } from '../../../../../../common/constants/difficultyLevels';

interface IDifficultyProps {
  setDifficultyLevel: React.Dispatch<React.SetStateAction<number>>;
}

const Difficulty = ({ setDifficultyLevel }: IDifficultyProps) => {
  const [level, setLevel] = useState(0);

  const changeColor = (index: number) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
      const copy = card;
      copy.removeAttribute('style');
      if (i === index) {
        const { style } = copy as HTMLDivElement;
        style.background = DIFFICULTY[index].color;
        style.borderColor = DIFFICULTY[index].color;
      }
    });
  };

  useEffect(() => {
    setDifficultyLevel(level);
    changeColor(level);
  }, [level]);

  document.onkeyup = (event) => {
    const { code } = event;
    switch (code) {
      case 'Digit1':
        setLevel(0);
        break;
      case 'Digit2':
        setLevel(1);
        break;
      case 'Digit3':
        setLevel(2);
        break;
      case 'Digit4':
        setLevel(3);
        break;
      case 'Digit5':
        setLevel(4);
        break;
      case 'Digit6':
        setLevel(5);
        break;
      case 'ArrowLeft':
        if (level > 0) setLevel(level - 1);
        break;
      case 'ArrowRight':
        if (level < 5) setLevel(level + 1);
        break;
      case 'Enter':
        (document.querySelector('.start') as HTMLDivElement).click();
        break;
      default: {
        console.log('Inactive buttons');
      }
    }
  };

  return (
    <div className={classes.difficulty__container}>
      <h4 className={classes.header}>Выберите уровень:</h4>
      <div className={classes.difficulties}>
        {DIFFICULTY.map((item) => (
          <DifficultyCard key={item.id} setLevel={setLevel} content={item.level} id={item.id} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
