import { MouseEvent } from 'react';
import { ICard } from './Interfaces';
import classes from './DifficultyCard.module.scss';

const DifficultyCard = ({ color, id, children, setLevel, setAccentColor, setPage }: ICard) => {
  const deleteCardsStyle = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => card.removeAttribute('style'));
  };

  const addCardStyle = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    const { style } = target;
    style.background = color;
    style.borderColor = color;
  };

  const clickHandler = (e: MouseEvent, level: number) => {
    deleteCardsStyle();
    setAccentColor(color);
    setLevel(level);
    setPage(0);
    addCardStyle(e);
  };

  return (
    <div className={`card ${classes.card}`} onClick={(event: MouseEvent) => clickHandler(event, id)}>
      {children}
    </div>
  );
};

export default DifficultyCard;
