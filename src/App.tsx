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
import Main from './pages/Main/Main';
// sprintCorrectAnswers: number,
//     audioCorrectAnswers: number,
//     learnedSprint: number,
// learnedAudio: number,
const App = (): JSX.Element => {
  const [sprintArray, setSprintArray] = useState<Word[]>([]);

  const createScore = (score: number, date: string) => {
    // const dateNow = new Date();
    const obj = {};
    // const key = date.getTime().toString();
    Object.defineProperty(obj, date, {
      value: score,
    });
    return obj;
  };


  // learned words object - API  {id: word} x 
  // stategame - false => learned.filter set???
  const [sprintPointsInARow, setSprintPointsInARow] = useState(0);
  const [audioPointsInARow, setAudioPointsInARow] = useState(0);
  // const [sprintCorrectAnswers, setSprintCorrectAnswers] = useState(gamesscore/gamestimes);
  const [sprintCorrectAnswers, setSprintCorrectAnswers] = useState(0);
// state games times+1
// state gamesScore ++++++%
  const [audioCorrectAnswers, setAudioCorrectAnswers] = useState(0);
  const [learnedSprint, setLearnedSprint] = useState(0);
  const [learnedAudio, setLearnedAudio] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const user = UserAPI.createUserObject('john', 'qwert1y1u@mail.ru', 'q1wertyu123');
      // await UserAPI.createUser(user);
      const date = new Date().getTime().toString();
      const userS = await UserAPI.signInUser(user);
      const time = new Date().setHours(0, 0, 0, 0).toString();
      const row = createScore(sprintPointsInARow, date);
      const stat = UserStatistic.createStatistic(
        userS.userId,
        userS.token,
        0,
        { scar: { score: 222, date: new Date().setHours(0, 0, 0, 0).toString() } },
        { '1234436046098': { score: audioPointsInARow, date: new Date().setHours(0, 0, 0, 0).toString() } },
        { 'sdgasdgasg': { score: sprintCorrectAnswers, date: new Date().setHours(0, 0, 0, 0).toString() } },
        { [time]: { score: audioCorrectAnswers, date: new Date().setHours(0, 0, 0, 0).toString() } },
        { [time]: { score: learnedSprint, date: new Date().setHours(0, 0, 0, 0).toString() } },
        { [time]: { score: learnedAudio, date: new Date().setHours(0, 0, 0, 0).toString() } }
      );
      const updstat = await UserStatistic.updateUserStatistic(stat);
      const data = await UserStatistic.getStatistic(userS.userId, userS.token);
      console.log(updstat, data, 'data');
    };

    fetchData().catch(console.error);
  }, [sprintPointsInARow]);

  const changeGameMode = (array: Word[]) => {
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
          <Route path="/sprintGame" element={<SprintGame array={sprintArray} setPoints={setSprintPointsInARow} />} />
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
