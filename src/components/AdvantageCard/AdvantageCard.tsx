import React from 'react';
import Card from '../card/Card';
import IAdvantageCard from './IAdvantageCard';
import styles from './AdvantageCard.module.scss';

const AdvantageCard: React.FC<IAdvantageCard> = ({ imgURL, title, body }) => {
    return (
        <Card type="team">
            <img src={imgURL} alt="advantage" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
        </Card>
    );
};

export default AdvantageCard;
