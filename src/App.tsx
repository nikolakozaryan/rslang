import React, { useState } from 'react';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import RouteComponent from './components/RouteComponent/RouteComponent';
import Statistic from './pages/Statistic/Statistic';
import './common/style/index.scss';
import StartingPageSprint from './pages/SprintGame/StartingPageSprint/StartingPageSprint';
import SprintGame from './pages/SprintGame/SprintGame/SprintGame';
import Word from './components/API/DictionaryAPI/Word';
import DictionaryAPI from './components/API/DictionaryAPI/DictionaryAPI';
import Main from './pages/Main/Main';

const App = (): JSX.Element => {
  const [sprintArray, setSprintArray] = useState<Word[]>([]);

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
          <Route path="/sprintGame" element={<SprintGame array={sprintArray} />} />
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
