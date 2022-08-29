import React from 'react';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import Games from './pages/Games/Games';
import RouteComponent from './components/RouteComponent/RouteComponent';
import Statistic from './pages/Statistic/Statistic';
import './common/style/index.scss';
import GameHeader from './pages/SprintGame/GameHeader/GameHeader';
import SprintDescription from './pages/SprintGame/SprintDescription/SprintDescription';
import SprintDifficulty from './pages/SprintGame/SprintDifficulty/SprintDifficulty';
import Button from './components/Button/Button';
import StartingPageSprint from './pages/SprintGame/StartingPageSprint/StartingPageSprint';
import SprintGame from './pages/SprintGame/SprintGame/SprintGame';

const App = (): JSX.Element => (
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
                <Route path="/games" element={<StartingPageSprint />} />
                <Route
                    path="/"
                    element={
                        <SprintGame />
                        // // <RouteComponent>
                        //     {/* <Main /> */}

                        // // </RouteComponent>
                    }
                />
            </Routes>
        </BrowserRouter>
    </>
);

export default App;
