import 'normalize.css';
import './sass/index.scss';
import React from 'react';
import Main from './pages/Main/Main';

const App = (): JSX.Element => (
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

export default App;
