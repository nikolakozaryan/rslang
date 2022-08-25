import React from 'react';
import classes from './CardTeam.module.scss';
import CardTeamInterface from './CardTeamInterface';

const CardTeam: React.FC<CardTeamInterface> = (props: CardTeamInterface) => (
    <>
        <div className={classes.cardTeam}>
            <div className={classes.header}>
                <div className={classes.photo} style={{ backgroundImage: `url(${props.member.photo})` }}></div>
                <div className={classes.description}>
                    <div className={classes.name}>{props.member.name}</div>
                    <div className={classes.role}>
                        <span>{props.member.role}</span>
                    </div>
                </div>
            </div>
            <div className={classes.contribution}>{props.member.contribution}</div>
        </div>
    </>
);
export default CardTeam;
