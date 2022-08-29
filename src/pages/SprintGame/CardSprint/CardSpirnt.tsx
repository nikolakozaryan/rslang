import React from 'react';
import classes from './CardSpirnt.module.scss';
import CardScorePoints from './CardScorePoints/CardScorePoints';
import CardWordGuessPart from './CardWordGuessPart/CardWordGuessPart';
import CardButton from './CardButton/CardButton';
import ICardSprint from './CardSprintInterface';

const CardSpirnt: React.FC<ICardSprint> = (props: ICardSprint) => (
    <div className={classes.container}>
        <div className={classes.CardUpperPart}>
            <CardScorePoints done={props.done[0][0]} correct={props.correct[0][1]} />
            <CardScorePoints done={props.done[1][0]} correct={props.correct[1][1]} />
            <CardScorePoints done={props.done[2][0]} correct={props.correct[2][1]} />
            <div className={classes.volume}>
                <img src="../../../assets/icons/volume.svg" alt="" />
            </div>
        </div>
        <CardWordGuessPart OurGuess="gas" GuessWord="gas" />
        <div className={classes.controls}>
            <div className={classes.cotrolsContainer}>
                <CardButton correct={true} refresh={props.refresh} />
                <CardButton correct={false} refresh={props.refresh} />
            </div>
            <div className={classes.cotrolsContainer}>
                <a href="##">
                    {' '}
                    <img src="../../../assets/icons/ArrowLeftCard.svg" alt="" />
                </a>
                <a href="##">
                    {' '}
                    <img src="../../../assets/icons/arrowRightCard.svg" alt="" />
                </a>
            </div>
        </div>
    </div>
);

export default CardSpirnt;
