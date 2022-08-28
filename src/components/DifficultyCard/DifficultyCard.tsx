import React from 'react';
import { ICard } from './Interfaces';
import classes from './DifficultyCard.module.scss';

const DifficultyCard = ({ color, id, children, setLevel }: ICard) => {
    const deleteCardsStyle = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => card.removeAttribute('style'));
    };

    const addCardStyle = (event: React.MouseEvent) => {
        const target = event.target as HTMLDivElement;
        const { style } = target.classList.contains('card') ? target : (target.closest('.card') as HTMLDivElement);
        style.background = color;
        style.borderColor = color;
    };

    const clickHandler = (event: React.MouseEvent, level: number) => {
        setLevel(level);
        deleteCardsStyle();
        addCardStyle(event);
    };

    return (
        <div className={`card ${classes.card}`} onClick={(event: React.MouseEvent) => clickHandler(event, id)}>
            {children}
        </div>
    );
};

export default DifficultyCard;
