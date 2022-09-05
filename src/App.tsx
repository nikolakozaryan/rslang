import React, { useEffect, useState } from 'react';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import RouteComponent from './components/RouteComponent/RouteComponent';
import Statistic from './pages/Statistic/Statistic';
import './common/style/index.scss';
import StartingPageSprint from './pages/Games/SprintGame/StartingPageSprint/StartingPageSprint';
import SprintGame from './pages/Games/SprintGame/SprintGame/SprintGame';
import Word from './components/API/DictionaryAPI/Word';
import UserStatistic from './components/API/StatisticAPI/StatisticAPI';
import Main from './pages/Main/Main';
import Entrance from './pages/Entrance/Entrance';
import ApplicationAccessContext from './context/context';
import Registration from './pages/Entrance/Registration/Registration';
import Authorization from './pages/Entrance/Authorization/Authorization';
import getUserData from './common/getUserData';
import Games from './pages/Games/Games';

const App = (): JSX.Element => {
  const [sprintArray, setSprintArray] = useState<Word[]>([]);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const userData = getUserData();

  useEffect(() => {
    const result = getUserData();
    if (result) {
      setIsSignedIn(true);
    }
  }, []);

  const [sprintPointsInARow, setSprintPointsInARow] = useState(0);
  const [audioPointsInARow, setAudioPointsInARow] = useState(0);
  const [gamesAmoutSprint, setGamesAmoutSprint] = useState(0);
  const [gamesAmoutAudio, setGamesAmoutAudio] = useState(0);
  const [gamesScoreSprint, setGamesScoreSprint] = useState(0);
  const [gamesScoreAudio, setGamesScoreAudio] = useState(0);
  const [audioCorrectAnswers, setAudioCorrectAnswers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const time = new Date().setHours(0, 0, 0, 0).toString();
      if (userData) {
        const stat = UserStatistic.createStatistic(
          userData.id,
          userData.token,
          0,
          { [time]: sprintPointsInARow },
          { [time]: audioPointsInARow },
          { [time]: gamesAmoutSprint },
          { [time]: gamesAmoutAudio },
          { [time]: gamesScoreSprint },
          { [time]: gamesScoreAudio }
        );

        const updstat = await UserStatistic.updateUserStatistic(stat);
      }
    };

    fetchData().catch(console.error);
  }, [gamesScoreSprint, gamesScoreAudio]);

  const changeGameMode = (array: Word[]) => {
    setSprintArray(array);
  };
  return (
    <>
      <ApplicationAccessContext.Provider value={{ isSignedIn, setIsSignedIn }}>
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
            <Route path="/gamess" element={<Games />} />
            <Route path="/games" element={<StartingPageSprint changeGameMode={changeGameMode} />} />
            <Route
              path="/sprintGame"
              element={
                <SprintGame
                  array={sprintArray}
                  setPoints={setSprintPointsInARow}
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
            <Route
              path="/registration"
              element={
                <Entrance>
                  <Registration />
                </Entrance>
              }
            />
            <Route
              path="/authorization"
              element={
                <Entrance>
                  <Authorization />
                </Entrance>
              }
            />
          </Routes>
        </BrowserRouter>
      </ApplicationAccessContext.Provider>
    </>
  );
};

export default App;
