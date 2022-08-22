import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../header";
import Games from "../pages/games";
import Book from "../pages/book";
import Statistic from "../pages/statistic";

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