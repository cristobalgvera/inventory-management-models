import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { EntryContextProvider } from './context';

ReactDOM.render(
    <React.StrictMode>
        <EntryContextProvider>
            <App/>
        </EntryContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);