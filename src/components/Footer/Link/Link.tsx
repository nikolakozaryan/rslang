import React from 'react';
import classes from './Link.module.scss';

type Developer = {
    developer: {
        name: string;
        gitHub: string;
    };
};

const Link: React.FC<Developer> = ({ developer }) => (
    <a href={developer.gitHub} target="_blank" className={classes.linkToDeveloper}>
        {developer.name}
    </a>
);

export default Link;
