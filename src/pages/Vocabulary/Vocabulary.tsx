import React, { useState } from 'react';
import Difficulty from './Difficulty/Difficulty';
import classes from './Vocabulary.module.scss';

const Vocabulary = () => {
    const [curLevel, setCurLevel] = useState(0);
    return (
        <>
            <h2 className={classes.header}>Учебник</h2>
            <Difficulty curLevel={curLevel} setCurLevel={setCurLevel} />
        </>
    );
};

export default Vocabulary;
