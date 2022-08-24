import React from 'react';
import Card from '../card/Card';
import IAdvantageCard from './IAdvantageCard';
import classes from './AdvantageCard.module.scss';

const AdvantageCard: React.FC<IAdvantageCard> = ({ imgURL, title, body }) => {
    return (
        <Card type="team">
            <img src={imgURL} alt="advantage" />
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.body}>{body}</p>
        </Card>
    );
};

export default AdvantageCard;
