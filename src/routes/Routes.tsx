import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, Greetings } from '../pages';

const AppRoutes = () => {
    return (
        <Switch>
            <Route component={Greetings} path='/hello' exact />
            <Route component={Home} path='/game' />
            <Redirect from='*' to='/hello' />
        </Switch>
    );
};

export default AppRoutes;
