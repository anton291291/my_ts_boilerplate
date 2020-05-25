import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Greetings } from '../pages';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route component={Greetings} path='/' exact />
                <Route component={Home} path='/game' />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
