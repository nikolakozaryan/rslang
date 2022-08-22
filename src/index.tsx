import 'normalize.css';
import './style.scss';
import App from './components/router/app';
import  ReactDOM  from 'react-dom';
import { createRoot } from "react-dom/client";
import Header from './components/header';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element);

root.render(
    <App/>
)


