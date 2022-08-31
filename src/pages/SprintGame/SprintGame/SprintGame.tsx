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

    const [ArrayGame, setArrayGame] = useState(array.slice());

    const [mistakes, setMistakes]: [Wordgame[], Dispatch<SetStateAction<Wordgame[]>>] = useState<Wordgame[]>([]);
    const [learned, setLearned]: [Wordgame[], Dispatch<SetStateAction<Wordgame[]>>] = useState<Wordgame[]>([]);

    const [timeleft, setTimeLeft] = useState(2 * 30);

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
    const [answer, setAnswer] = useState(false);
    const [ourAnswer, setourAnswer] = useState(false);
    const [ourGuess, setOurGuess] = useState(ArrayGame[Math.ceil(Math.random() * ArrayGame.length - 1)].word);
    const [wordGuess, setWordGuess] = useState(ArrayGame[Math.ceil(Math.random() * ArrayGame.length - 1)].word);

    const getourGuess = () => {
        const correct = Math.ceil(Math.random() * 2);
        if (correct === 1) {
            setAnswer(true);
            const number = Math.ceil(Math.random() * ArrayGame.length - 1);
            if (number === -1) {
                setGameStage(false);
            } else {
                setOurGuess(ArrayGame[number].word);
                setWordGuess(ArrayGame[number].word);
            }
        } else {
            const number = Math.ceil(Math.random() * ArrayGame.length - 1);
            if (number === -1) {
                setGameStage(false);
            } else {
                setAnswer(false);
                setOurGuess(ArrayGame[Math.ceil(Math.random() * ArrayGame.length - 1)].word);
                setWordGuess(ArrayGame[Math.ceil(Math.random() * ArrayGame.length - 1)].word);
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
        setScore(score + 10);
        const newArray = ArrayGame.slice();
        const correctWord = array.filter((item) => item.word === wordGuess)[0];
        if (!mistakes.includes(correctWord) && ourGuess === wordGuess) {
            setLearned([...learned, correctWord]);
            newArray.splice(newArray.indexOf(correctWord), 1);
            if (newArray.length === 1) {
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
        const pointStateNew: boolean[] = refreshPoint(false);
        newState[pointNumber] = pointStateNew;
        setState(newState);
    };

    const refresh = (buttonAnswer: boolean) => {
        console.log(ArrayGame.length);
        getourGuess();
        if (pointNumber < 2) {
            const newCount = pointNumber + 1;

            setPointNumber(newCount);
            if (answer === buttonAnswer) {
                correctAnswer();
            } else {
                wrongAnswer();
                const newArray = ArrayGame.slice();
                const wrongWordIndex = newArray.map((item) => item.word).indexOf(wordGuess as string);
                if (!mistakes.includes(array[wrongWordIndex])) {
                    setMistakes([...mistakes, array[wrongWordIndex]]);
                }
            }
        } else {
            setPointNumber(0);
            if (answer === buttonAnswer) {
                correctAnswer();
                setScore(score + 10);
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
                ourGuess={ourGuess as string}
                wordGuess={wordGuess as string}
            />
        </div>
    );
};

export default SprintGame;
