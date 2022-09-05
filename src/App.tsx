import React, { useEffect, useState } from 'react';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import RouteComponent from './components/RouteComponent/RouteComponent';
import Statistic from './pages/Statistic/Statistic';
import './common/style/index.scss';
import StartingPageSprint from './pages/SprintGame/StartingPageSprint/StartingPageSprint';
import SprintGame from './pages/SprintGame/SprintGame/SprintGame';
import Word from './components/API/DictionaryAPI/Word';
import UserAPI from './components/API/UsersAPI/UsersAPI';
import UserStatistic from './components/API/StatisticAPI/StatisticAPI';
import DictionaryAPI from './components/API/DictionaryAPI/DictionaryAPI';
import LearnedWordsAPI from './components/API/LearnedWordsAPI/LearnedWordsAPI';
import Main from './pages/Main/Main';
// sprintCorrectAnswers: number,
//     audioCorrectAnswers: number,
//     learnedSprint: number,
// learnedAudio: number,
const App = (): JSX.Element => {
  const [sprintArray, setSprintArray] = useState<Word[]>([]);

  // learned words object - API  {id: word} x
  // stategame - false => learned.filter set???
  const [sprintPointsInARow, setSprintPointsInARow] = useState(0);
  const [audioPointsInARow, setAudioPointsInARow] = useState(0);
  // const [sprintCorrectAnswers, setSprintCorrectAnswers] = useState(gamesscore/gamestimes);
  const [sprintCorrectAnswers, setSprintCorrectAnswers] = useState(' ');
  const [gamesAmoutSprint, setGamesAmoutSprint] = useState(0);
  const [gamesAmoutAudio, setGamesAmoutAudio] = useState(0);
  const [gamesScoreSprint, setGamesScoreSprint] = useState(0);
  const [gamesScoreAudio, setGamesScoreAudio] = useState(0);
  // state games times+1
  // state gamesScore ++++++%
  const [audioCorrectAnswers, setAudioCorrectAnswers] = useState(0);
  const [learnedSprint, setLearnedSprint] = useState(0);
  const [learnedAudio, setLearnedAudio] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const user = UserAPI.createUserObject('johns', 'qwertyu@mail.ru', 'qwertyu123');
      // const userc = UserAPI.createUser(user);
      const userS = await UserAPI.signInUser(user);
      const time = new Date().setHours(0, 0, 0, 0).toString();
      const stat = UserStatistic.createStatistic(
        userS.userId,
        userS.token,
        0,
        { [time]: sprintPointsInARow },
        { [time]: audioPointsInARow },
        { [time]: sprintCorrectAnswers },
        { [time]: audioCorrectAnswers },
        { [time]: learnedSprint },
        { [time]: learnedAudio },
        { [time]: gamesAmoutSprint },
        { [time]: gamesAmoutAudio },
        { [time]: gamesScoreSprint },
        { [time]: gamesScoreAudio }
      );
      const updstat = await UserStatistic.updateUserStatistic(stat);
      console.log(updstat);
    };

    fetchData().catch(console.error);
  }, [gamesScoreSprint, gamesScoreAudio]);

  const changeGameMode = (array: Word[]) => {
    console.log(array, 'arraymode');
    setSprintArray(array);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/vocabulary"
            element={
              <RouteComponent>
                <Vocabulary />
              </RouteComponent>
            }
          />
          <Route
            path="/statistic"
            element={
              <RouteComponent>
                <Statistic />
              </RouteComponent>
            }
          />
          <Route path="/games" element={<StartingPageSprint changeGameMode={changeGameMode} />} />
          <Route
            path="/sprintGame"
            element={
              <SprintGame
                array={sprintArray}
                setPoints={setSprintPointsInARow}
                setLearnedStat={setLearnedSprint}
                setAmount={setGamesAmoutSprint}
                setCorrect={setGamesScoreSprint}
              />
            }
          />
          <Route
            path="/"
            element={
              <RouteComponent>
                <Main />
              </RouteComponent>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
