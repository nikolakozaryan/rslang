import React, { useState } from 'react';
import classes from './SprintGame.module.scss';
import CardSpirnt from '../CardSprint/CardSpirnt';
import GameHeader from '../GameHeader/GameHeader';

const SprintGame = () => {
    const emptyState = [
        [false, false],
        [false, false],
        [false, false],
    ];

    const [state, setState] = useState([
        [false, false],
        [false, false],
        [false, false],
    ]);
    const [pointNumber, setPointNumber] = useState(0);
    const [answer, setAnswer] = useState(false);

    const refreshPoint = (result: boolean) => {
        let point;
        if (result) {
            point = [true, true];
        } else {
            point = [true, false];
        }
        return point;
    };

    const correctAnswer = () => {
        let newState;
        if (pointNumber) {
            newState = state.slice();
        } else {
            newState = emptyState;
        }
        const pointStateNew: boolean[] = refreshPoint(true);
        newState[pointNumber] = pointStateNew;
        setState(newState);
    };
    const wrongAnswer = () => {
        let newState;
        if (pointNumber) {
            newState = state.slice();
        } else {
            newState = emptyState;
        }
        const pointStateNew: boolean[] = refreshPoint(true);
        newState[pointNumber] = pointStateNew;
        setState(newState);
    };

    const refresh = () => {
        console.log(pointNumber);
        if (pointNumber < 2) {
            const newCount = pointNumber + 1;
            setPointNumber(newCount);
            if (answer) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
        } else {
            console.log('what');
            setPointNumber(0);
            if (answer) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
        }
    };

    return (
        <div className={classes.background}>
            <GameHeader />
            <CardSpirnt done={state} correct={state} refresh={refresh} />
        </div>
    );
};

export default SprintGame;
