import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classes from './SprintGame.module.scss';
import CardSpirnt from '../CardSprint/CardSpirnt';
import GameHeader from '../GameHeader/GameHeader';
import Word from '../../../../components/API/DictionaryAPI/Word';
import CounterGame from '../CounterGame/CounterGame';
import LearnedWordsAPI from '../../../../components/API/LearnedWordsAPI/LearnedWordsAPI';
import Data from '../../../../components/API/StatisticAPI/IData';
import getUserData from '../../../../common/getUserData';

const SprintGame = (props: {
  array: Word[];
  setPoints: Dispatch<SetStateAction<number>>;
  setAmount: Dispatch<SetStateAction<number>>;
  setCorrect: Dispatch<SetStateAction<number>>;
}) => {
  const emptyState = [
    [false, false],
    [false, false],
    [false, false],
  ];

  const [gameStage, setGameStage] = useState(true);

  const [nextQ, setNextQ] = useState(0);

  const backToGame = () => {
    setGameStage(!gameStage);
  };

  const [xScore, setXScore] = useState(1);

  const [ArrayGame, setArrayGame] = useState(props.array.slice());
  const [mistakes, setMistakes]: [Word[], Dispatch<SetStateAction<Word[]>>] = useState<Word[]>([]);
  const [learned, setLearned]: [Word[], Dispatch<SetStateAction<Word[]>>] = useState<Word[]>([]);

  const [timeleft, setTimeLeft] = useState(2 * 60);

  const [isCounting, setIsCounting] = useState(timeleft);

  const [score, setScore] = useState(0);

  const [state, setState] = useState([
    [false, false],
    [false, false],
    [false, false],
  ]);

  const [pointNumber, setPointNumber] = useState(0);
  const [pointInARow, setPointInARow] = useState(0);
  const [pointInARowStat, setPointInARowStat] = useState(0);
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
        props.setPoints(pointInARowStat);
      } else {
        setOurGuess(ArrayGame[number]);
        setWordGuess(ArrayGame[number]);
      }
    } else {
      const numberUp = Math.ceil(Math.random() * ArrayGame.length - 1);
      if (numberUp === -1) {
        setGameStage(false);
        props.setPoints(pointInARowStat);
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
    if (pointInARow > pointInARowStat) {
      setPointInARowStat(pointInARow);
    }
    setScore(score + 10 * xScore);
    const correctWord = props.array.filter((item) => item === wordGuess)[0];
    if (!mistakes.includes(correctWord) && ourGuess === wordGuess && !learned.includes(correctWord)) {
      setLearned([...learned, correctWord]);
      const newArray = ArrayGame.slice();
      newArray.splice(newArray.indexOf(correctWord), 1);
      if (newArray.length === 0) {
        setGameStage(false);
        props.setPoints(pointInARowStat);
      }
      setArrayGame(newArray);
    } else if (mistakes.includes(correctWord) && ourGuess === wordGuess && !learned.includes(correctWord)) {
      const newArray = ArrayGame.slice();
      newArray.splice(newArray.indexOf(correctWord), 1);
      if (newArray.length === 0) {
        setGameStage(false);
        props.setPoints(pointInARowStat);
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
    const pointStateNew: boolean[] = refreshPoint(false);
    newState[pointNumber] = pointStateNew;
    setState(newState);
  };

  useEffect(() => {
    getourGuess();
    if (nextQ !== 0) {
      if (pointNumber < 2) {
        const newCount = pointNumber + 1;
        setPointNumber(newCount);
        if (answer === ourAnswer) {
          correctAnswer();
        } else {
          wrongAnswer();
          if (!mistakes.includes(wordGuess)) {
            setMistakes([...mistakes, wordGuess]);
          }
        }
      } else {
        setPointNumber(0);
        if (answer === ourAnswer) {
          correctAnswer();
          setScore(score + 10 * xScore);
        } else {
          wrongAnswer();
        }
      }
    }
  }, [nextQ]);
  useEffect(() => {
    const myInterval = setInterval(() => {
      setIsCounting(isCounting - 1);
      setTimeLeft((prevTime) => (prevTime >= 0 ? prevTime - 1 : 0));

      if (timeleft === 0) {
        props.setPoints(pointInARowStat);
        setGameStage(false);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [timeleft]);

  const refresh = () => {
    setNextQ(nextQ + 1);
  };

  document.onkeydown = (event) => {
    const { key } = event;
    if (key === 'ArrowLeft') {
      refreshOurAnswer(true);
      refresh();
    } else if (key === 'ArrowRight') {
      refreshOurAnswer(false);
      refresh();
    }
  };

  useEffect(() => {
    const userData = getUserData();
    if (gameStage === false && userData) {
      const sign = async () => {
        const { id } = userData;
        const { token } = userData;
        props.setPoints(pointInARowStat);
        props.setAmount(1);
        props.setCorrect(Number((learned.length / 20).toFixed(2)));
        const resp = async () => {
          let count = 0;
          const data = await LearnedWordsAPI.getLearnedWords(id, token);
          const server = data.optional.learnedWords.split(' ');
          const servercountsprint = data.optional.learnedWordsNumberSprint as Data;
          const servercountaudio = data.optional.learnedWordsNumberAudio as Data;
          const countnew = servercountsprint[Object.keys(servercountsprint)[0]] as number;
          const countnewaudio = servercountaudio[Object.keys(servercountaudio)[0]] as number;
          learned.map((item) => {
            if (!server.includes(item.word)) {
              server.push(item.word);
              count += 1;
            }
            return item;
          });
          const date = new Date().setHours(0, 0, 0);
          const WordNumberSprint = { [date]: count + countnew };
          const WordNumberAudio = { [date]: countnewaudio };
          const newLearnWords = async () => {
            const lw = LearnedWordsAPI.createWord(id, token, 1, server, WordNumberSprint, WordNumberAudio);
            await LearnedWordsAPI.updateUserLearnedWords(lw);
          };
          newLearnWords();
        };
        resp();
      };
      sign();
    }
  }, [gameStage]);

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
        nextQ={nextQ}
      />
    </div>
  );
};

export default SprintGame;
