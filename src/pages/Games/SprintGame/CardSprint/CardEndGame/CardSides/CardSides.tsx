import { PropsWithChildren, FC } from 'react';
import classes from './cardSides.module.scss';

const CardSides: FC<PropsWithChildren> = ({ children }) => <div className={classes.card}>{children}</div>;

export default CardSides;
