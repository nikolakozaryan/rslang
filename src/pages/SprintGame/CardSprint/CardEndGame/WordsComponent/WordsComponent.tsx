import React, { PropsWithChildren } from 'react';
import classes from './WordsComponent.module.scss';

const WordsComponent: React.FC<PropsWithChildren> = ({ children }) => <div className={classes.words}>{children}</div>;

export default WordsComponent;
