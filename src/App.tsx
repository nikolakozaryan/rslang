import React from 'react';
import 'normalize.css';
import './common/style/index.scss';
import Main from './pages/Main/Main';

const App = (): JSX.Element => (
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

export default App;
