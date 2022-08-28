import React, { useContext } from 'react';
import Authorization from './Authorization/Authorization';
import Registration from './Registration/Registration';
import classes from './Entrance.module.scss';
import ApplicationAccessContext from '../../context/context';

const Entrance = () => {
    const { applicationAccess } = useContext(ApplicationAccessContext);

    return (
        <div className={classes.container}>
            <div className={classes.illustration}></div>
            {applicationAccess === 'registration' ? <Registration /> : <Authorization />}
        </div>
    );
};

export default Entrance;
