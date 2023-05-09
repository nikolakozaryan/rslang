import { PropsWithChildren, FC } from 'react';
import classes from './WordsComponent.module.scss';

const WordsComponent: FC<PropsWithChildren> = ({ children }) => <div className={classes.words}>{children}</div>;

export default WordsComponent;
