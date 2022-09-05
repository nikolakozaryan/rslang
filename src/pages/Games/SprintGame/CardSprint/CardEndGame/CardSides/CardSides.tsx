import React, { PropsWithChildren } from 'react';
import classes from './cardSides.module.scss';

const CardSides: React.FC<PropsWithChildren> = ({ children }) => <div className={classes.card}>{children}</div>;

export default CardSides;
