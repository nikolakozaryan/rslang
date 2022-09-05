import React from 'react';
import classes from './DifficultyCard.module.scss';
import IDifficultyCard from './Interfaces';

const DifficultyCard = ({ content, id, color, setLevel }: IDifficultyCard) => {
  const changeLevel = (event: React.MouseEvent) => {
    setLevel(id);

    document.querySelectorAll('.card').forEach((el) => el.removeAttribute('style'));
    const target = event.currentTarget as HTMLDivElement;
    const { style } = target;
    style.background = color;
    style.borderColor = color;
  };

  return (
    <div onClick={(e: React.MouseEvent) => changeLevel(e)} className={`card ${classes.card}`}>
      {content}
    </div>
  );
};

export default DifficultyCard;
