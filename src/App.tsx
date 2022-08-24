import React from 'react';
import 'normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';
import Book from './components/Pages/Book/Book';
import Games from './components/Pages/Games/Games';
import Statistic from './components/Pages/Statistic/Statistic';



const App = (): JSX.Element =>
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/book" element={<Book />} />
                <Route path="/statistic" element={<Statistic />} />

                <Route path="/games" element={<Games />} />
            </Routes>
        </BrowserRouter>
        <Main />
    </>



export default App;