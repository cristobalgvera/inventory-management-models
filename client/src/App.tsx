import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { EntryContextProvider } from './context';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <EntryContextProvider>
            <Dashboard/>
        </EntryContextProvider>
    </BrowserRouter>
);

export default App;
