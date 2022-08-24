import React from 'react';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Book from './components/Pages/Book/Book';
import Games from './components/Pages/Games/Games';
import RouteComponent from './components/RouteComponent/RouteComponent';
import Statistic from './components/Pages/Statistic/Statistic';
import './common/style/index.scss';

const App = (): JSX.Element => (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/book"
                    element={
                        <RouteComponent>
                            <Book />
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
            </Routes>
        </BrowserRouter>
    </>
);

export default App;
