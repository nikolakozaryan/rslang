import React from 'react';
import Card from '../Card/Card';
import IAdvantageCard from './IAdvantageCard';
import classes from './AdvantageCard.module.scss';

const AdvantageCard: React.FC<IAdvantageCard> = ({ imgURL, title, body }) => (
    <Card type="team">
        <img className={classes.image} src={imgURL} alt="advantage" />
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.body}>{body}</p>
    </Card>
);

export default AdvantageCard;
