import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Games from "../pages/Games/Games";
import Book from "../pages/Book/Book";
import Statistic from "../pages/Statistic/Statistic";

function App(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/book" element={<Book />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/games" element={<Games />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App