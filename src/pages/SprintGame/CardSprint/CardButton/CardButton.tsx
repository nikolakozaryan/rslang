import React from 'react';
import classes from './CardButton.module.scss';
import ICardButton from './CardButtonInterface';

const CardButton: React.FC<ICardButton> = (props: ICardButton) => {
    const change = () => {
        props.refresh();
    };

    return (
        <button
            onClick={change}
            className={classes.container}
            style={{ backgroundColor: props.correct ? '#58C87E' : '#FF6862' }}
        >
            {props.correct ? 'Верно' : 'Неверно'}
        </button>
    );
};

export default CardButton;
