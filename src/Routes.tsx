import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Components';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route component={Home} path='/' exact />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
