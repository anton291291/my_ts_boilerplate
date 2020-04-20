import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelloWorld } from '../components';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route component={HelloWorld} path='/' exact />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
