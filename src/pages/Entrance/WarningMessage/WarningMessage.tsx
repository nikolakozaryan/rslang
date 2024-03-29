import { FC, PropsWithChildren } from 'react';
import classes from './WarningMessage.module.scss';

type ErrorCondition = {
  errorCondition: string | boolean;
};

const WarningMessage: FC<PropsWithChildren<ErrorCondition>> = ({ errorCondition, children }) => (
  <>{errorCondition ? <p className={classes.error}>{children}</p> : <p className={classes.transparent}>Error</p>}</>
);

export default WarningMessage;
