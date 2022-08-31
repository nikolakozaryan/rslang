import React from 'react';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vocabulary from './pages/Vocabulary/Vocabulary';
import RouteComponent from './components/RouteComponent/RouteComponent';
import Statistic from './pages/Statistic/Statistic';
import './common/style/index.scss';
import StartingPageSprint from './pages/SprintGame/StartingPageSprint/StartingPageSprint';
import SprintGame from './pages/SprintGame/SprintGame/SprintGame';
import Main from './pages/Main/Main';

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
                <Route path="/statistic" element={<SprintGame />} />
                <Route path="/games" element={<StartingPageSprint />} />
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

export default App;
