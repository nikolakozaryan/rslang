import React, { useEffect, useState } from 'react';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import Games from './pages/Games/Games';
import RouteComponent from './components/RouteComponent/RouteComponent';
import Statistic from './pages/Statistic/Statistic';
import './common/style/index.scss';
import Entrance from './pages/Entrance/Entrance';
import ApplicationAccessContext from './context/context';
import Registration from './pages/Entrance/Registration/Registration';
import Authorization from './pages/Entrance/Authorization/Authorization';
import getUserData from './common/getUserData';

const App = (): JSX.Element => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    const result = getUserData();
    if (result) {
      setIsSignedIn(true);
    }
  }, []);

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
            <Route
              path="/games"
              element={
                <RouteComponent>
                  <Games />
                </RouteComponent>
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
