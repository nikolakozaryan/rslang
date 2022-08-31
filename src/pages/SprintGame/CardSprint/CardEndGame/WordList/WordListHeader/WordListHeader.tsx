import React, { PropsWithChildren } from 'react';
import classes from './WordListHeader.module.scss';
import IWordList from '../wordListInterface';

const WordListHeader: React.FC<IWordList> = (props: IWordList) => (
    <div className={classes.header}>
        <h3>{props.header}</h3>
        <div className={props.side === 'mistakes' ? classes.mistakesIndicatior : classes.learnedIndicator}>
            {props.side === 'mistakes' ? props.mistakes.length : props.learned.length}
        </div>
    </div>
);

export default WordListHeader;
