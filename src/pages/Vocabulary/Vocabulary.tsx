import React, { useState } from 'react';
import Difficulty from './Difficulty/Difficulty';
import Games from './Games/Games';
import classes from './Vocabulary.module.scss';

const Vocabulary = () => {
  const [curLevel, setCurLevel] = useState(0);
  return (
    <>
      <h2 className={classes.header}>Учебник</h2>
      <Difficulty curLevel={curLevel} setCurLevel={setCurLevel} />
      <Games />
    </>
  );
};

export default Vocabulary;
