import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classes from './SprintGame.module.scss';
import CardSpirnt from '../CardSprint/CardSpirnt';
import GameHeader from '../GameHeader/GameHeader';
import array from './array';
import CounterGame from '../CounterGame/CounterGame';
import Wordgame from './typewordgames';

const SprintGame = () => {
    const emptyState = [
        [false, false],
        [false, false],
        [false, false],
    ];

    const [gameStage, setGameStage] = useState(true);

    const backToGame = () => {
        setGameStage(!gameStage);
    };

    const [xScore, setXScore] = useState(1);

    const [ArrayGame, setArrayGame] = useState(array.slice());

    const [mistakes, setMistakes]: [Wordgame[], Dispatch<SetStateAction<Wordgame[]>>] = useState<Wordgame[]>([]);
    const [learned, setLearned]: [Wordgame[], Dispatch<SetStateAction<Wordgame[]>>] = useState<Wordgame[]>([]);

    const [timeleft, setTimeLeft] = useState(2 * 222);

    const [isCounting, setIsCounting] = useState(timeleft);

    useEffect(() => {
        const myInterval = setInterval(() => {
            setIsCounting(isCounting - 1);
            setTimeLeft((prevTime) => (prevTime >= 0 ? prevTime - 1 : 0));

            if (timeleft === 0) {
                setGameStage(false);
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    }, [timeleft]);

    const [score, setScore] = useState(0);

    const [state, setState] = useState([
        [false, false],
        [false, false],
        [false, false],
    ]);

    const [pointNumber, setPointNumber] = useState(0);
    const [pointInARow, setPointInARow] = useState(0);
    const [answer, setAnswer] = useState(false);
    const [ourAnswer, setourAnswer] = useState(false);
    const [ourGuess, setOurGuess] = useState(ArrayGame[Math.ceil(Math.random() * ArrayGame.length - 1)]);
    const [wordGuess, setWordGuess] = useState(ArrayGame[Math.ceil(Math.random() * ArrayGame.length - 1)]);

    const getourGuess = () => {
        let correct;
        if (ArrayGame.length > 2) {
            correct = Math.ceil(Math.random() * 2);
        } else {
            correct = 1;
        }
        if (correct === 1) {
            setAnswer(true);

            const number = Math.ceil(Math.random() * ArrayGame.length - 1);
            if (number === -1) {
                setGameStage(false);
            } else {
                setOurGuess(ArrayGame[number]);
                setWordGuess(ArrayGame[number]);
            }
        } else {
            const numberUp = Math.ceil(Math.random() * ArrayGame.length - 1);
            if (numberUp === -1) {
                setGameStage(false);
            } else {
                setAnswer(false);
                setOurGuess(ArrayGame[numberUp]);
                let numberDown = Math.ceil(Math.random() * ArrayGame.length - 1);
                if (numberDown !== numberUp) {
                    setWordGuess(ArrayGame[numberDown]);
                } else {
                    do {
                        numberDown = Math.ceil(Math.random() * ArrayGame.length - 1);
                    } while (numberDown === numberUp);
                    setWordGuess(ArrayGame[numberDown]);
                    console.log('emposter', ourGuess, wordGuess, numberDown, numberUp);
                }
            }
        }
    };

    const refreshOurAnswer = (correct: boolean) => (correct ? setourAnswer(true) : setourAnswer(false));

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
        setPointInARow(pointInARow + 1);
        console.log(pointInARow);
        setScore(score + 10 * xScore);
        const correctWord = array.filter((item) => item === wordGuess)[0];
        if (!mistakes.includes(correctWord) && ourGuess === wordGuess && !learned.includes(correctWord)) {
            setLearned([...learned, correctWord]);
            const newArray = ArrayGame.slice();
            newArray.splice(newArray.indexOf(correctWord), 1);
            if (newArray.length === 0) {
                setGameStage(false);
            }
            setArrayGame(newArray);
        } else if (mistakes.includes(correctWord) && ourGuess === wordGuess && !learned.includes(correctWord)) {
            const newArray = ArrayGame.slice();
            newArray.splice(newArray.indexOf(correctWord), 1);
            if (newArray.length === 0) {
                setGameStage(false);
            }
            setArrayGame(newArray);
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
        setPointInARow(0);
        console.log(pointInARow);
        const pointStateNew: boolean[] = refreshPoint(false);
        newState[pointNumber] = pointStateNew;
        setState(newState);
    };

    const refresh = (buttonAnswer: boolean) => {
        getourGuess();
        console.log(ourGuess, wordGuess);
        if (pointNumber < 2) {
            const newCount = pointNumber + 1;
            setPointNumber(newCount);
            if (answer === buttonAnswer) {
                correctAnswer();
            } else {
                wrongAnswer();
                const newArray = ArrayGame.slice();
                const wrongWordIndex = ArrayGame.indexOf(wordGuess);
                if (!mistakes.includes(wordGuess)) {
                    setMistakes([...mistakes, wordGuess]);
                }
            }
        } else {
            setPointNumber(0);
            if (answer === buttonAnswer) {
                correctAnswer();
                setScore(score + 10 * xScore);
            } else {
                wrongAnswer();
            }
        }
    };

    document.onkeydown = (event) => {
        const { key, keyCode } = event;
        if (keyCode === 37) {
            refreshOurAnswer(true);
            refresh(true);
        } else if (keyCode === 39) {
            refreshOurAnswer(false);
            refresh(false);
        }
    };

    useEffect(() => {
        if (learned.length + mistakes.length === array.length) {
            console.log('end');
        }
    }, [ArrayGame]);

    useEffect(() => {
        if (pointInARow === 3) {
            setXScore(2);
        } else if (pointInARow === 0) {
            setXScore(1);
        } else if (pointInARow >= 6) {
            setXScore(3);
        }
    }, [pointInARow]);
    return (
        <div className={classes.background}>
            <GameHeader />
            {gameStage && <CounterGame counter={timeleft} />}
            <CardSpirnt
                backToGame={backToGame}
                learned={learned}
                mistakes={mistakes}
                game={gameStage}
                score={score}
                done={state}
                correct={state}
                refresh={refresh}
                refreshAnswer={refreshOurAnswer}
                ourGuess={ourGuess}
                wordGuess={wordGuess}
            />
        </div>
    );
};

export default SprintGame;
