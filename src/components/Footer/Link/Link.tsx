import React from 'react';
import classes from './Link.module.scss';

type Developer = {
  name: string;
  gitHub: string;
};

const Link: React.FC<Developer> = ({ name, gitHub }) => (
  <a href={gitHub} target="_blank" className={classes.linkToDeveloper}>
    {name}
  </a>
);

export default Link;
