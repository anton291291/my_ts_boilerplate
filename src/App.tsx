import React from 'react';

import { CssBaseline } from '@material-ui/core';

import AppRoutes from './routes/Routes';
import store from './store/store';

const App = () => {
    return (
        <div className='App'>
            <CssBaseline />
            <AppRoutes/>
        </div>
    );
};

export default App;
